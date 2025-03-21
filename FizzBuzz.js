// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
// "FizzBuzz".
function FizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("".concat(i, ": FizzBuzz"));
        }
        else if (i % 3 === 0) {
            console.log("".concat(i, ": Fizz"));
        }
        else if (i % 5 === 0) {
            console.log("".concat(i, ": Buzz"));
        }
        else {
            console.log("".concat(i));
        }
    }
}
FizzBuzz();
