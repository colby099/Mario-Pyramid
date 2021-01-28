
printPyramid(5);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {

//Declare variables
let string = '';
let i;
let j;
let k;
let brick = "#";

//Setup pyramid and run the code
  for(i = 1; i <= height; i++){
    string = "";
    for(j = 1; j <= (height - i); j++){
      string += " ";
    }
    for(k = 1; k <= i + 1; k++){
      string += brick;
    }
    console.log(string);
  }
}
