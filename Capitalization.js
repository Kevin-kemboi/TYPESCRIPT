// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
// Examples: 
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"
function capitalizeWords(input) {
    return input.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
}
console.log(capitalizeWords("hi")); // "Hi"
console.log(capitalizeWords("i love programming")); // "I Love Programming"
