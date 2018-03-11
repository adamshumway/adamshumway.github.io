//audio
function autoToggle(id) {
    var btn = document.getElementById(id);
    var audio = document.getElementById("audio");
    
    if (btn.innerHTML === "Autoplay On") {
        btn.innerHTML = "Autoplay Off";
        audio.autoplay = false;
        audio.load();

        localStorage.removeItem("audio");
        localStorage.audio = audio.autoplay;
        // console.log("if " + audio.autoplay);
    } else {
        btn.innerHTML = "Autoplay On";
        audio.autoplay = true;
        audio.load();
        
        localStorage.removeItem("audio");
        localStorage.audio = audio.autoplay;
    }
}

// on page load info, like calling the clock function and loading autoplay preferences
function onLoad() {
    var audio = document.getElementById("audio");
    var bool = localStorage.audio;
    var btn = document.getElementById("autoplay");
    
    if(bool == "true") {
        audio.autoplay = true;
    } else {
        audio.autoplay = false;
    }
    
    if(audio.autoplay === true) {
        document.getElementById("autoplay").innerHTML = "Autoplay On";
    } else if(typeof bool == "undefined") {
        document.getElementById("autoplay").innerHTML = "Set Autoplay";
    } else {
        document.getElementById("autoplay").innerHTML = "Autoplay off";
    }
    audio.load();
    createClock();
}

function reset() {
    console.log("in clear function");
    localStorage.removeItem("audio");
    document.getElementById("autoplay").innerHTML = "Set Autoplay";
}

function controls(id) {
    var btn = document.getElementById(id);
    var video = document.getElementById("video");

    if(btn.innerHTML == "Controls On") {
        video.controls = true;
        btn.innerHTML = "Controls Off";
        video.load();
    } else {
        video.controls = false;
        btn.innerHTML = "Controls On";
        video.load();
    }
}

function playPause(id) { 
    var video = document.getElementById(id);
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
} 

function makeBig(id) { 
    var video = document.getElementById(id);
    video.width = 560;
    video.height = 480;
} 

function makeSmall(id) { 
    var video = document.getElementById(id);
    video.width = 160;
    video.height = 120;
} 

function makeNormal(id) { 
    var video = document.getElementById(id);
    video.width = 320; 
    video.height = 240;
} 

/* clock functions */
function createClock(){
    //create vars and set runtime interval (ever second)
    
    var canvas = document.getElementById("clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    setInterval(drawClock, 1000, ctx, radius);
}

//draw the clock
function drawClock(ctx, radius) {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI); //large "face" background
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, 'grey'); //hands and inner circle
  grad.addColorStop(0.5, 'blue'); //middle clock border gradiant line
  grad.addColorStop(1, 'red'); //outter border gradient line
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI); //center dot
  ctx.fillStyle = 'black'; //center dot color
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  //font size and text placement
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  //create the actual numbers
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

//get current time and draw it out
function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

//based on the time, draw the location on the clock (or the time)
function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}