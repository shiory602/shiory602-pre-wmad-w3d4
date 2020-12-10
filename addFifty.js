let numbers = [45, 34, 56, 67, 74, 34];

// Write code to loop through the array, and print "the number __ + 50 = __"
// you will have to use the .length method in your loop as your stop condition

for (let i = 0; i < numbers.length; i++) {
	// console.log("the number " + numbers[i] + " + 50 = " + (numbers[i] + 50));
	console.log(`the number ${numbers[i]} + 50 = ${numbers[i] + 50}`);
}

// the number 45 + 50 = 95
// the number 34 + 50 = 84
// the number 56 + 50 = 106
// the number 67 + 50 = 117
// the number 74 + 50 = 124
// the number 34 + 50 = 84