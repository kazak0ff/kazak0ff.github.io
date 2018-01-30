const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let firstString = alphabet.substr(0,alphabet.indexOf('a'));
let secondString = alphabet.substr(alphabet.indexOf('a'), alphabet.indexOf('z') - alphabet.indexOf('a'));
let thirtString =  alphabet.substr(alphabet.indexOf('z'));


const firstArray = firstString.split('');
const secondArray = secondString.split('');
const thirtArray = thirtString.split('');

const summaryArray = [firstArray, secondArray, thirtArray];

console.log(firstArray);

let hello = summaryArray[1][5] + summaryArray[0][2] + summaryArray[1][8] + summaryArray[1][8] 
				+ summaryArray[0][8];

let javaScript = summaryArray[1][6] + summaryArray[1][0] + summaryArray[2][3] + summaryArray[1][0] 
				+ summaryArray[1][1] + summaryArray[2][2] + summaryArray[0][3] + summaryArray[0][7] 
				+ summaryArray[0][9] + summaryArray[0][4];
let trainer = summaryArray[0][4] + summaryArray[0][3] + summaryArray[1][0] + summaryArray[0][7] 
				+ summaryArray[2][5] + summaryArray[0][2] + summaryArray[0][3];
				
console.log(hello);
console.log(javaScript);
console.log(trainer);