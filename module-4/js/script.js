	
const array = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./");
let secondTask = getRandCharInRow(prompt("Insert number of row",""));
let thirdTask = getRandCharInAlph();

alert(`случайный символ со строки ${secondTask} \nслучайный символ со всего алфавита ${thirdTask}`);

function addKeyboardLayout(alphabet) {
	let firstString = alphabet.substr(0,alphabet.indexOf('a'));
	let secondString = alphabet.substr(alphabet.indexOf('a'), alphabet.indexOf('z') - alphabet.indexOf('a'));
	let thirtString =  alphabet.substr(alphabet.indexOf('z'));

	const firstArray = firstString.split('');
	const secondArray = secondString.split('');
	const thirtArray = thirtString.split('');
		
	return summaryArray = [firstArray, secondArray, thirtArray];
}

function getRandCharInRow(row) {
	let symbhol;

	while(symbhol) {
		symbhol = array[row][Math.floor(Math.random() * 11)];
	}

	return symbhol;
}

function getRandCharInAlph()  {
	return getRandCharInRow([Math.floor(Math.random() * 3)]);
}