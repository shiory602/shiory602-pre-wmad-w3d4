let mixedArray = ["Dogs", "cats", 6, "77", 70, "toyota", 9];

// Write a loop that goes through all of the items of the array
// for each item, check if it is a string, or if it is a number,
// If its a string, console.log("The item at index __ is a __")
// If its a number sai its a number and if its a string say its a string.

let typeIs;

for (let i = 0; i < mixedArray.length; i++) {
	if (typeof mixedArray[i] === "number") {
		typeIs = "number";
	} else if (typeof mixedArray[i] === "string") {
		typeIs = "string";
	}
	console.log(`The item at index ${mixedArray[i]} is a ${typeIs}`);
}

// Solution
	for (let i = 0; i < mixedArray.length; i++) {

		if (typeof mixedArray[i] === "number") {
			console.log(`The item at index ${i} is the type number`)
		} else if (typeof mixedArray[i] === "string") {
			console.log(`The item at index ${i} is the type string`)
		}
		console.log(`The item at index ${mixedArray[i]} is a ${typeIs}`);
	}


// console.log(typeof 43);
// // returns "number"
// console.log(typeof "Dogs");
// // returns "string"
// // console.log(typeof "dogs" === "string");
// console.log(typeof "dogs" === "string");
// // return true (if its boolean, return true/false)
// console.log(typeof true);
// // returns "boolean"