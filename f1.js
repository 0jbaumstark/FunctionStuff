/*
** This is the file f1.js
** Read each comment below, declare each function.
** These are all PURE FUNCTIONS, they only depend and change the input values.
*/


/*******************************NUMBER FOCUSED****************************/

// (1) First Task
// Declare a function named double() which outputs a number double the input number.
function double (a) {
    let total = a * 2
    return total
}




// (2) Second Task
// Declare a function named plusplus() which outputs a number one higher than the input number.

function plusplus (b) {
    let total = b + 1
    return total 
}






// (3) Third Task
// Declare a function named oppRecip() which outputs the opposite reciprocal of the input number.

function oppRecip (c\d) {
    let total= d/c * c/d
    return total





// (4) Fourth Task
// Declare a function named pthagorean() which has two inputs you guessed it a and b.
// The function outputs the value of the third side of the right triangle.

function pthagorean (a,b) {
    let total = c = a*a + b*b
    return Math.sqrt (c)
}



// (5) Fifth Task
// Declare a function named circleArea() which has one input named radius.
// The function outputs the area of the circle.

function circleArea (radius) {
    let total = 2 * radius * Math.PI
    return total 
}




// (6) Sixth Task
// Declare a function named boxVolume() which has three inputs: length, width, and depth.
// The function outputs the volume of the box;

function boxVolume (l,w,d) {
    let total = l*w*d
    return total
}




/**************************** STRING FOCUSED *********************************/



// (7) Seventh Task
// Declare a function named thisIsMadness() which accepts one string input named city.
// The function should output the string: "No! This is <city>!!"

function thisIsMadness(city){
    let sentence = "No! This is <city>!!"
    return sentence
}
    





// (8) Eigth Task
// Declare a function named yo() which accepts one string input named fam.
// The function should output the string: "yo <fam>!  What's good <fam>??"

function yo(fam) {
    let friend = "Yo <fam>! What's good <fam>??"
    return friend
}
    



// (9) Ninth Task
// Declare a function named beefDay() which has no inputs.
// This function should output a long string, IN ALL CAPS, of "BEEF DAY" with lots of extra E's, F's, A's, and Y's

function beefDay(){
    let thursdays = "BEEF DAY"
    return thursdays






/**************************** BOOLEAN FOCUSED *******************************/


// (10) Tenth Task
// Declare a function named xor() which has two inputs a and b.
// This function returns the exclusive or of the two boolean inputs.

function xor(a,b){
    let total = (a || b) && !(a && b);
    return total
}








/**************************** END OF FILE *******************************/