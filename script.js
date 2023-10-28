// The function to convert an array of numbers to an array of strings.
function arrToString(arr) {
	return arr.map(String);
}

// Call the function and write the result in a variable.
const arr1 = arrToString([1, 2, 3]);
const arr2 = arrToString([10, 200, 3333]);

// Outputing the result to the console.
console.log(`Converted arr1 array:`, arr1);
console.log(`Converted arr2 array:`, arr2);