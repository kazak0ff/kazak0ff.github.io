const firstConstant = "qwertyuiop[]";
const secondConstant = "asdfghjkl;'";
const thirdConstant = "zxcvbnm,.";

const firstLength = firstConstant.length;
const secondtLength = secondConstant.length;
const thirdLength = thirdConstant.length;

let firstConstStart = firstConstant.charAt(0);
let firstConstEnd = firstConstant.charAt(firstLength - 1);

let secondConstStart = secondConstant.charAt(0);
let secondConstEnd = secondConstant.charAt(secondtLength - 1);

let thirdConstStart = thirdConstant.charAt(0);
let thirdConstEnd = thirdConstant.charAt(thirdLength - 1);

let indexOfFirst = firstConstant.indexOf("[")
let indexOfSecond = firstConstant.indexOf("]")

console.log(`firstConstant = ${firstConstant}  \nsecondConstant = ${secondConstant} \nsthirdConstant = ${thirdConstant} 
firstLength = ${firstLength} \nsecondtLength = ${secondtLength} \nthirdLength = ${thirdLength} 
firstConstStart = ${firstConstStart} \nfirstConstEnd = ${firstConstEnd}
secondConstStart = ${secondConstStart} \nsecondConstEnd = ${secondConstEnd}
thirdConstStart = ${thirdConstStart} \nthirdConstEnd = ${thirdConstEnd}
indexOfFirst = ${indexOfFirst} \nindexOfSecond = ${indexOfSecond}`);