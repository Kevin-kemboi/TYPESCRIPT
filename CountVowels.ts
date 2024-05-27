// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2

function countVowels(sentence: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("My name is Kevin kemboi")); // 2