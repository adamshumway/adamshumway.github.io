var counter = 0;

function goRed() {
    var box = document.getElementById("ex1");
    box.style.background = "red";
    doCount();
}

function doCount() {
    counter += 1;
    var theCount = document.getElementById("counter");
    var text = "Changes captured: <strong>" + counter + "</strong>";

    theCount.innerHTML = text;
}

function goBlue() {
    var box = document.getElementById("ex1");
    box.style.background = "blue";
    box.focus();
    doCount();
}

function goYellow() {
    var box = document.getElementById("ex1");
    box.style.background = "yellow";
    doCount();
}

function goGreen() {
    var box = document.getElementById("ex1");
    box.style.background = "green";
    doCount();
}

function runAn1() {
    var box = document.getElementById("ex1");
    box.id = "ex1-an1";
    doCount();
}

function stopAn1() {
    var box = document.getElementById("ex1-an1");
    console.log(box);
    box.id = "ex1";
    box.style.background = "grey";
}

function toggle() {
    var box = document.getElementById("ex1");
    runAn1();        
    setTimeout(stopAn1, 4000);
}