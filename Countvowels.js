// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2
function countVowels(sentence) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var char = sentence_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // 2
