// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

function fibonacciSequence(limit: number): number[] {
    let sequence: number[] = [0, 1];
    let nextValue = sequence[0] + sequence[1];

    while (nextValue <= limit) {
        sequence.push(nextValue);
        nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    }

    return sequence;
}

console.log(fibonacciSequence(100));
