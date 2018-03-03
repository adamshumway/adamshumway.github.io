
/* load file function with callback */
function loadFile(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("in LoadFile and going to call callback");
            cFunction(this);
        }
        else
            cFunction(this); //allowing this path to display error in search

    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/* function to call out and handle pokemon request */
function loadPoke (xhttp) {
    //console.log("entered loadPoke function")
    var jsonFile = JSON.parse(xhttp.responseText);
    var jText = JSON.stringify(jsonFile, null, 2);
    //console.log(jText);
    document.getElementById("poke").innerHTML = jText;

}

/* searches for name of pokemon */
function getPokemon() {
    document.getElementById('poke').innerHTML = "";
    var str = document.getElementById("name").value;
    var poke = str.toLowerCase(); //the api only accepts lowercase searches
    var url = "https://pokeapi.co/api/v2/pokemon/" + poke;
    loadFile(url, loadPoke);
}