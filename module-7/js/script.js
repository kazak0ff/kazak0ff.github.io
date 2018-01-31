const array = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./", "a", "z");

function addKeyboardLayout(alphabet, secondIndex, thirdIndex) {
    let firstString = alphabet.substr(0,alphabet.indexOf(secondIndex));
    let secondString = alphabet.substr(alphabet.indexOf(secondIndex), alphabet.indexOf(thirdIndex) - alphabet.indexOf(secondIndex));

	let thirdString =  alphabet.substr(alphabet.indexOf(thirdIndex));
    const firstArray = firstString.split('');
    const secondArray = secondString.split('');

	const thirdArray = thirdString.split('');
    return [firstArray, secondArray, thirdArray];
}

function createLayout() {
    array.forEach(row => {
        let main = document.querySelector("main");
        main.style.margin = '20%';
        main.style.textAlign = 'center';
        let firstDiv = document.createElement('div');
        row.forEach(element => {
            let symb = document.createElement('div');
            symb.style.display = 'inline-block';
            symb.style.width = '40px';
            symb.style.height = '40px';
            symb.style.border = '2px';
            symb.style.borderColor = 'black';
            symb.style.borderStyle = 'solid';
            symb.style.borderCollapse = 'collapse';
            symb.style.backgroundColor = 'white';
            symb.textContent = element;
            firstDiv.appendChild(symb);
        })
        main.appendChild(firstDiv);
    });
    
}

createLayout();
