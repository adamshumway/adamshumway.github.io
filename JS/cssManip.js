
/* Ex1 */
var toggle = false

function runEx1 () {
    if (toggle){
        toggle = false;
        
        document.getElementById("ex1").style.color = "black";
    }
    else {
        toggle = true;
        
        document.getElementById("ex1").style.color = "red";
    }
}

/* Ex2 */
function runEx2 () {
    var square = document.getElementById("ex2");
    var clickMe = document.getElementById("clickMe"); 
    var button = clickMe;
  
  square.style.backgroundColor = "#fa4";
  button.setAttribute("disabled", "true");
  setTimeout(clearEx2, 3000, button);
}

function clearEx2 (button) {
  var square = document.getElementById("ex2");
  square.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}

/* ExN - use when trying to show code blocks
    The toggle will turn the style on and off and demonstrate creating and removing DOM Styles */

/* Code Block Styling */

// using toggle as defined earlier in the document
//var toggle = false; 

function runEx3 () {
    var stylesheet = "codeBlock";
    var myStyle = getStyleSheet(stylesheet);

    if (toggle){
        toggle = false;
        
        myStyle.disabled = true;
    }
    else {
        toggle = true;
                
        myStyle.disabled = false;
    }
}

function getStyleSheet(unique_title) {
    for(var i=0; i<document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if(sheet.title == unique_title) {
        return sheet;
      }
    }
  }