const prompt = require('prompt-sync')();

const numAString = prompt(`Type the first number? `);
const numA = Number (numAString)

const numBString = prompt(`Type the second number? `);
const numB = Number (numBString)

const numCString = prompt(`Type the third number? `);
const numC = Number (numCString)

const numDString = prompt(`Type the fourth number? `);
const numD = Number (numDString)

const numEString = prompt(`Type the fifith number? `);
const numE = Number (numEString)

const numFString = prompt(`Type the sixth number? `);
const numF = Number (numFString)


const numX =  ( (numC*numE)-(numB*numF)/(numA*numE)-(numB*numD)) 
const numY =  ( (numA*numF)-(numC*numD)/(numA*numE)-(numB*numD)) 



console.log (`The x valor is: ${numX}`);
console.log (`The y valor is: ${numY}`);