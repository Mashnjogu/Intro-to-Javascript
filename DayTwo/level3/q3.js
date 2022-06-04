//the number of times love occurs in the sentence below
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
var wordcount = loveSentence.match(/(\love+)/g).length
console.log(wordcount)

let bSentence = 'You cannot end a sentence with because because because is a conjunction'
var count = bSentence.match(/(\ because+)/g).length
console.log(count)

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSentence = sentence.replace(/[^\w\s]|_/g, ""); // remove punctuation
/*the \w looks for all word characters in a string including 0-9 and underscore thus
\^w was looking for non word characters
the \s looks for whitespace
_/g/'' means global and replaces all the _ charcaters in the string and replaces underscore with spaces.
*/
console.log(cleanSentence)
let words = cleanSentence.split(/\s/); //splits the array in any kind of whitespace character
console.log(words)
// let wordFrequencies = new Map();
// words.forEach(function(word)){
//     if(!wordFrequencies.has(word)){
//         wordFrequencies.set(word, 1);
//     }else{
//         wordFrequencies.set(word, wordFrequencies.get(word)+1);
//     }
//     let maxFrequency = Math.max(...wordFrequencies.values()); // Find max frequency of any word.
// let wordsMatchingMaxFrequency = Array.from(wordFrequencies.keys()).filter((word) => {
//     return wordFrequencies.get(word) === maxFrequency;})
// }

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

//salary @ month
console.log(income.search(50))
let salaryPerMonth = income.substr(9,4)
console.log(salaryPerMonth)

//annual bonus
console.log(income.search(10))
let annualBonus = income.substr(42, 5)
console.log(annualBonus)

//online course income per month
console.log(income.search(15))
let onlineCourse = income.substr(67, 5)
console.log(onlineCourse)

//total income in an year
var totalIncome = (salaryPerMonth * 12) + (onlineCourse * 12) + annualBonus
console.log(totalIncome) //= 24000010000