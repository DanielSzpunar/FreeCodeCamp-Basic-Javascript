var array = [1,3,5,7,9,2,4,0,8,10];
var smallest = smallestValue(array);
console.log(array);
console.log("The smallest value in the array is " + smallest);
var smallestIndex = smallestIndex(array);
console.log("The smallest index in the array is " + smallesstIndex);

function smallestValue(array) {
    var smallestValue = array[0];
    for(var i = 0; i < array.length; i++) {
        if (smallestValue > array[i]) {
            smallestValue = array[i];
        }
    }
    return smallestValue;
}
function smallestIndex(array) {
    var smallestIndex = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[smallestIndex] > array[i]) {
            smallestIndex = i;
        }
    }
    return smallestIndex;
}