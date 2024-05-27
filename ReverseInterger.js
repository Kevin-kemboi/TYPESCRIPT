// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering.
function reverseInteger(n) {
    var reversedNumber = parseInt(n.toString().split('').reverse().join(''), 10);
    return Math.sign(n) * reversedNumber;
}
console.log(reverseInteger(30));
console.log(reverseInteger(86));
console.log(reverseInteger(10));
console.log(reverseInteger(-91));
