// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples: 
// 8=> returns true
// 16=> returns true

function isPowerOfTwo(n: number): boolean {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(16)); // true