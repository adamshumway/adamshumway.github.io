var toggle = false

function countToggle () {
    if (toggle){
        toggle = false;
        
        document.getElementById("result").style.visibility = "visible";
    }
    else {
        toggle = true;
        
        document.getElementById("result").style.visibility = "hidden";
    }
}

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function removeClick() {
    if(localStorage.clickcount) {
        localStorage.removeItem("clickcount");
        localStorage.clickcount = 0;
    }

    var text = "You have clicked the button " + localStorage.clickcount + " time(s).";

    document.getElementById("result").innerHTML = text;
}

function submit() {
    var name = document.getElementById("name").value;
    var food = document.getElementById("food").value;
    var song = document.getElementById("song").value;

    localStorage.name = name;
    localStorage.food = food;
    localStorage.song = song;

    document.getElementById("values").innerHTML = "";

    var form = document.getElementById("form");

    form.innerHTML = "Form Saved to Local Storage";
    setTimeout(hide, 5000, form);
}

function show() {
    if(localStorage.name)
        var name = localStorage.name;

    if(localStorage.food)
        var food = localStorage.food;

    if(localStorage.song)
        var song = localStorage.song;

    console.log("name: " + name + ", food: " + food + ", song: " + song);
    if(typeof name !== "undefined" && typeof food !== "undefined" && typeof song !== "undefined") {
        var text = "Your name is <strong>" + name + "</strong> and your favorite food is <strong>" 
        + food + "</strong> which you enjoy while jamming out to your favorite song, <strong>" + song + "</strong>!"; 

        document.getElementById("values").innerHTML = text;
    }
    else {
        document.getElementById("values").innerHTML = "There are not enough valid values in Local Storage.  Please fill out the entire form.";
    }
    
}

function reset() {
    localStorage.removeItem("name");
    localStorage.removeItem("food");
    localStorage.removeItem("song");

    document.getElementById("values").innerHTML = "";
    document.getElementById("name").value = "";
    document.getElementById("food").value = "";
    document.getElementById("song").value = "";
    
    var form = document.getElementById("form");
    form.innerHTML = "Form data cleared from Local Storage";

    setTimeout(hide, 5000, form);
}

function hide(object) {
    object.innerHTML = "";
}