/* simple multiplication function */
function myFunction(p1, p2) {
    return p1 * p2; // The function returns the product of p1 and p2
}

/* for loop */
function runForLoop() {
    var text = "";
    //added array here to make it easier to demo and deal with scope issues
    var carColor = ["blue", "black", "gunmetal", "jet black", "mello yellow", "metalic green", "silver", "white", "grey", "racing red"];
    for ( i = 0; i < 10; i++)
    {
        text += carColor[i] + "<br>";
    }
    document.getElementById("forLoop").innerHTML = text;
}

/* for in loop */
function runInLoop() {
    var text = "";
    //added array here to make it easier to demo and deal with scope issues
    var carColor = {camery:"blue", jetta:"black", hummer:"gunmetal", camero:"jet black", firebird:"mello yellow", fiat:"metalic green", silverado:"silver", c200:"white", m5:"grey", supra:"racing red"};
    var x;
    for (x in carColor)
    {
        text += carColor[x] + "<br>";
    }
    document.getElementById("forInLoop").innerHTML = text;
}

/* while loop */
function runWhileLoop() {
    var i = 5;
    var count = 0;
    var text;
    while(i > 3) {
        i--;
        count++;
    }
    text = "The variable i has a value of: <strong>" + i + "</strong> and the counter has a value of: <strong>" + count + "</strong>";
    document.getElementById("while").innerHTML = text;
}