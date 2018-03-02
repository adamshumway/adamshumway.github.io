
var counter = 1;

function setText() {
    var text = "Element #" + counter;
    counter++;
    return text;
}

function createCanvas() {
    console.log('entered function createCanvas');
    var newDiv = document.createElement("div");
    newDiv.id = "div" + counter;
    var newCanvas = document.createElement("canvas");
    newCanvas.id = "main" + counter;
    newCanvas.style.width="200";
    newCanvas.style.height="500";
    //newCanvas.style.position="absolute";
    newCanvas.style.left=0;
    
    newDiv.appendChild(newCanvas);
    
    return newDiv;
    // var doc = document.getElementById("elements");
    // doc.appendChild(newDiv);
}


function createRec () {
    var canvID = "main" + counter;
    var text = setText();
    console.log('canvID = ' + canvID);
    console.log('entered function createRec');
    var canvas = document.getElementById(canvID);
    console.log(canvas);
    var ctx = canvas.getContext("2d");
    ctx.rect(10, 25, 150, 100);
    ctx.style="border:1px solid";
    ctx.font="20px Helvetica";
    ctx.textAlign="center";
    ctx.fillText(text, 75, 80 )
    ctx.stroke();
}

function createNew () {
    console.log('entered function createNew');
    var canvID = "main" + counter;
    var insert;
    var canvas = document.getElementById(canvID);
    console.log(canvas);
    if(canvas == null) {
        insert = createCanvas();
    }
    var doc = document.getElementById("elements");
    doc.appendChild(insert);
    createRec();
}

function remove() {
    console.log('entered function remove');
    var toRM = "div" + (counter - 1);
    console.log("toRM = " + toRM)
    console.log("counter = " + counter);
    var numNodes = document.getElementById("elements").childNodes.length;
    var currDoc = document.getElementById("elements").childNodes[numNodes - 1];
    console.log("div is " + currDoc.id);
    // var elem = document.getElementById(toRM);
    // elem.parentNode.removeChild(elem);

    currDoc.parentNode.removeChild(currDoc);

    counter--;
}

function inBefore() {
    var currDiv = "div1"
    var div = document.getElementById(currDiv);
    if(div == null)
        createNew();
    else {
        var inBefore = createCanvas();
        var doc = document.getElementById("elements");
        doc.insertBefore(inBefore, doc.childNodes[0]);
        createRec();
    }
}

function replace() {
    var currDiv = "div1"
    // var div = document.getElementById(currDiv);
    // if(div == null)
    //     createNew();
    // else {
        var numNodes = document.getElementById("elements").childNodes.length;
        console.log("numNodes = " + numNodes);

        var replace = createCanvas();
        var doc = document.getElementById("elements");
        doc.replaceChild(replace, doc.childNodes[numNodes - 1]);
        createRec();
    // }
}
