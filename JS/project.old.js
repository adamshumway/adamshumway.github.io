var movieBasePath = "http://image.tmdb.org/t/p/w500";
/* static 'now playing' query */
var nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
/* static 'get popular' query */
var getPopular = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
/* static 'top rated' query */
var topRated = "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
/* static 'get upcoming' query */
var getUpcoming = "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";

/* get now playing - my api key is: f3440b43f00ffcf48f98630447fa13d9 */
//be sure to look at my pre-built ajax function.. that would probably work just fine to get results back
// as long as I supply the query correctly

/* function from earlier effort */
/* example function call: onclick="loadFile('../FILES/star-trek-movies.json', callLoad)" */
function loadFile(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log("in LoadFile and going to call callback");
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/* example of retrieving json information and iterating through the file while outputting to the page */
/* need to add function to accept load json object and then pass a single image to get loaded by image function */
function loadJSON (xhttp) {
    var movieBasePath = "http://image.tmdb.org/t/p/w500";
    var jsonFile = JSON.parse(xhttp.responseText);
    text = JSON.stringify(jsonFile, null, 2);

    var movieList = [];
    
    ////displays json file
    //document.getElementById("json").innerHTML = text; 

    //loop through the json file and display posters
    for (var i = 0; i < jsonFile.results.length; i++) {
        //console.log("poster path: " + movieBasePath + jsonFile.results[i].poster_path);
        var theTitle = jsonFile.results[i].title;
        var poster = movieBasePath + jsonFile.results[i].poster_path;
        var votes = jsonFile.results[i].vote_count;
        var obj = [];
        obj = {title: theTitle, votes: votes, poster: poster};
        movieList[i] = obj;

        var dataNum = "igData" + (i + 1); 
        console.log(dataNum);
        //var theClass = document.getElementsByClassName("dataNum");
        //document.styleSheets[0].addRule("'" + dataNum + ":after'", "content: '" + theTitle + "';");
        var str = window.getComputedStyle(document.querySelector('.' + dataNum), ':after').getPropertyValue('content');
        console.log(str);

        // var duh = document.getElementsByClassName(dataNum);
        // duh[0].style.
        //window.getComputedStyle(document.querySelector('.' + dataNum), ':after').setProperty('content','Poop');
        //document.styleSheets[0].addRule('igData1:after','content: "TheMovie";');
        //var str1 = "poop";
        //document.styleSheets[0].addRule('igData1:after','content: "'+str1+'";');
        // var index = document.styleSheets[0].cssRules.length - 1;
        // console.log(index);
        // document.styleSheets[0].insertRule('igData1:after{content: "poop"}',index);
        //theClass.style.content = theTitle;
        /* capture current margin settings */
        // var computedStyle = window.getComputedStyle(theClass),
        //   marginLeft = computedStyle.getPropertyValue('margin-left');
        // boxOne.style.marginLeft = marginLeft;

        var imgSRC = poster;
        img = document.createElement('img');
        img.src = imgSRC;
        img.setAttribute("width", "400");
        img.setAttribute("height", "600");
        document.getElementById("posters").appendChild(img);
    }
    console.log(movieList);
}

window.onload = function(){testRun();};

function testRun() {
    console.log("Am now in the testRun function");
    var nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var getPopular = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var topRated = "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var getUpcoming = "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";

    loadFile(getUpcoming, loadJSON);
}