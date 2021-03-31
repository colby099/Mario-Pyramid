//Call the slider
var slider = document.getElementById("range");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


//Set the slider action
slider.oninput = function() {
  
  //Set the pyramid height to the slider value
  rowStr = document.getElementById("range").value

  //Define height with rowStr
  height = rowStr;

  //Draw pyramid using slider for height
  drawPyramid(height);
}

//Call drawPyramid function
function drawPyramid(height) {

  //Get the pyramid container element
  var container = document.getElementById("pyramid");

  container.innerHTML = '';

  //Declare variables for pyramid loops
  let rowStr = '';

  //pull the value from the dropdown
  let brick = document.getElementById("nbrick").value;

  //Setup pyramid
  for(let i = 1; i <= height; i++){
    rowStr = "";
    for(let j = 1; j <= (height - i); j++){
      rowStr += "&nbsp;";
    }
    for(let k = 1; k <= i + 1; k++){
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
