/**
 * Quick review:
 * .push() adds to the end of an array.
 * .pop() removes the last item on an array.
 * .shift() removes the first item on an array.
 * .unshift() adds to the from of an array.
 */
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
myArray.shift();
myArray.unshift(["Paul",35]);

