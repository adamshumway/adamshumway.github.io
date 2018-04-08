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
    localStorage.removeItem("movies");
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
      
    }
//console.log(movieList);

    localStorage.movies = JSON.stringify(movieList);

    //console.log(localStorage.movies);


}

window.onload = function(){testRun();};

function calcVotes() {
    var list = JSON.parse(localStorage.movies);
    var votes = list[0].votes;

    for (i = 1; i < 10; i++) {
        //votes += list[i].votes;
        //console.log("each vote: " + votes);
        if(votes < list[i].votes)
            votes = list[i].votes;
    }

    return votes;
}

function showPoster() {
    var list = JSON.parse(localStorage.movies);
    var img;
    var span;

    var poster = document.getElementsByClassName("myPoster");
    var container = document.getElementById("posters");
    var selector = document.getElementsByClassName("selector-container")[0];

    container.removeChild(selector);

    
    for(i = 0; i < poster.length; i++) {
        if(typeof poster[i] !== "undefined") {
            poster[i].parentElement.removeChild(poster[i]);
            //console.log("deleting node: " + JSON.stringify(poster[i]));
        }

    }
    

    
    selector = document.createElement("div");
    selector.className = "selector-container text-white center large display-bottommiddle";

    var selLeft = document.createElement("div");
    var selRight = document.createElement("div");

    selLeft.className = "selLeft hover-text-khaki";
    selLeft.setAttribute("onclick","plusDivs(-1)");
    selLeft.innerHTML = "&#10094;";

    selRight.className = "selRight hover-text-khaki";
    selRight.setAttribute("onclick","plusDivs(1)");
    selRight.innerHTML = "&#10095;";

    selector.appendChild(selLeft);
    selector.appendChild(selRight);
    container.appendChild(selector);

    for (i = 0; i < 10; i++) {
        var imgSRC = list[i].poster;
        img = document.createElement('img');
        img.src = imgSRC;
        img.className = "myPoster";
        img.setAttribute("width", "100%");
        img.setAttribute("height", "100%");
        document.getElementById("posters").appendChild(img);
        //console.log(document.getElementById("posters"));

        span = document.createElement("span");
        span.className = "badge demo border transparent hover-white";
        span.setAttribute("onclick", "currentDiv("+i+")");
        document.getElementsByClassName("selector-container")[0].appendChild(span);

    }

    
}
function buildChart(votes) {
    var list = JSON.parse(localStorage.movies);

    //I only want to show 10
    for (i = 0; i < 10; i++) {
        var votePercent = (list[i].votes / votes) * 100;
        var bar = document.getElementsByClassName("chart--horiz")[0];
        //console.log(votePercent);
        //console.log(list[i].title + " " + list[i].votes);

        var words = document.createElement("span");
        words.innerHTML = list[i].title;
        words.className = "chart__label";
        bar.appendChild(words);
    
        var newLi = document.createElement("li");
        newLi.className = "chart__bar";
        newLi.style.width = Math.round(votePercent).toString() +"%";
    
        // var newSpan = document.createElement("span");
        // newSpan.className = "chart__label";
        // newSpan.innerHTML = list[i].title;
        // newLi.appendChild(newSpan);
        bar.appendChild(newLi);
    }
}

function dropChart() {
    var bar = document.getElementsByClassName("chart--horiz")[0];
    var chart = document.getElementsByClassName("chart--dev")[0];

    chart.removeChild(bar);

    bar = document.createElement("ul");
    bar.className = "chart--horiz";

    chart.appendChild(bar);
}

function runSearch(search) {
    var nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var getPopular = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var topRated = "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var getUpcoming = "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";

    console.log(search);
    if(search === nowPlaying) {loadFile(nowPlaying, loadJSON);};
    if(search === getPopular) {loadFile(getPopular, loadJSON);};
    if(search === topRated) {loadFile(topRated, loadJSON);};
    if(search === "getUpcoming") {loadFile(getUpcoming, loadJSON);}

    var votes = calcVotes();
    dropChart();
    buildChart(votes);
    showPoster();

    showDivs(slideIndex = 1);

}

function testRun() {
    //console.log("Am now in the testRun function");
    var nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var getPopular = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var topRated = "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";
    var getUpcoming = "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=f3440b43f00ffcf48f98630447fa13d9";

 loadFile(nowPlaying, loadJSON);
 

    var votes = calcVotes();
    //console.log(votes);

    buildChart(votes);
    showPoster();

    slideIndex = 1;
    showDivs(slideIndex);
    slideShow(1);
}

function plusDivs(n) {
    var val = (slideIndex += n);
  showDivs(val);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  slideIndex = n;
  var x = document.getElementsByClassName("myPoster");
  var dots = document.getElementsByClassName("demo");
  if (n > 10) {slideIndex = 1}    
  //console.log("(n > x.length) - " + slideIndex);
  if (n < 1) {slideIndex = x.length}
  //console.log("(n < 1) - " + slideIndex);
    for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" white", "");
  }
  //console.log("slideIndex: " + slideIndex);
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " white";
  //setTimeout(plusDivs, 5000, 1); // Change image every 3 seconds

}

function slideShow(n) {
    myIndex = n;
    plusDivs(myIndex);
    setTimeout(slideShow, 3000, myIndex); // Change image every 2 seconds
}