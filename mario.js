//Call the button 
var button = document.getElementById("draw");

//Set the action
button.onclick = function() {

  //Get user input
  rowStr = document.getElementById("height").value

  //Convert height from string to int
  height = parseInt(rowStr);

  //Draw pyramid with user height
  drawPyramid(height);
}


/*
 * drawPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

function drawPyramid(height) {

  //Get the pyramid container element
  var container = document.getElementById("pyramid");

  //Declare variables for pyramid loops
  let rowStr = '';
  let i;
  let j;
  let k;
  let brick = "#";

  //Setup pyramid
  for(i = 1; i <= height; i++){
    rowStr = "";
    for(j = 1; j <= (height - i); j++){
      rowStr += ".";
    }
    for(k = 1; k <= i + 1; k++){
      rowStr += brick;
    }

  //Create a <p> element
  var pElem = document.createElement("p");

  //Set rowStr to be the inner text of the <p>
  pElem.innerHTML = rowStr;
  
  //Insert the paragraph as a child of the <div>
  container.appendChild(pElem);
  }
}
