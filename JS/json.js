
/* load file function with callback */
function loadFile(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send();
}

/* use for loading JSON files */
function callLoad(xhttp) {
    var jObj = JSON.parse(xhttp.responseText);
    var jText = JSON.stringify(jObj, null, 2);
    document.getElementById("load").innerHTML = jText;
}

/* use for loading images */
function loadImg(url) {
    var imgSRC = url;
    img = document.createElement('img');
    img.src = imgSRC;
    img.setAttribute("width", "400");
    img.setAttribute("height", "600");
    document.getElementById("img").appendChild(img);
    
}

/* need to add function to accept load json object and then pass a single image to get loaded by image function */
function loadJSON (xhttp) {
    var jsonFile = JSON.parse(xhttp.responseText);

    // console.log(jsonFile[0].poster);

    // for (var i = 0; i < jsonFile.length; i++) {
    //     console.log("poster: " + jsonFile[i].poster);
    // }

    //loop through the json file and display posters
    for (var i = 0; i < jsonFile.length; i++) {
        //console.log("poster: " + jsonFile[i].poster);
        var imgSRC = jsonFile[i].poster;
        img = document.createElement('img');
        img.src = imgSRC;
        img.setAttribute("width", "400");
        img.setAttribute("height", "600");
        document.getElementById("json").appendChild(img);
    }


}