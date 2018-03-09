
function moveBlue() {
  var boxOne = document.getElementById("box");
  var btn = document.getElementById("toggleButton");

  /* check for "left" moving style, and if it exists, clear it */
  if(boxOne.classList == "rtnTranslate") {
    boxOne.classList.remove("rtnTranslate");
  }

  /* play/pause toggle */
  if(btn.innerHTML === 'Play') 
  { 
    btn.innerHTML = 'Pause';
    /* create "right" moving style */
    boxOne.classList.add('horizTranslate');
  } else {
    btn.innerHTML = 'Play';
    /* maintains current margin setting for resume */
    var computedStyle = window.getComputedStyle(boxOne),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxOne.style.marginLeft = marginLeft;
    /* update style for pause */
    boxOne.classList.remove('horizTranslate');    
  }  
}

function rtnBlue() {
  var boxOne = document.getElementById("box");
  var btn = document.getElementById("toggleButton");

  /* capture current margin settings */
  var computedStyle = window.getComputedStyle(boxOne),
    marginLeft = computedStyle.getPropertyValue('margin-left');
  boxOne.style.marginLeft = marginLeft;

  /* remove "right" moving style and create "left" moving style */
  boxOne.classList.remove("horizTranslate");   
  boxOne.classList.add("rtnTranslate");
  /* reset "play" button */
  btn.innerHTML = "Play";

}

function timeClick(id) {
  var box = document.getElementById(id);
  if(box.classList == "ease") {
    box.classList.remove("ease");
  } else {
    box.classList.add("ease");
  }
  
}

function t3(id) {
  var box = document.getElementById(id);
  if(box.classList == "t3") {
    box.classList.remove("t3");
  } else {
    box.classList.add("t3");
  }
  
}