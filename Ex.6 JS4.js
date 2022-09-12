const prompt = require('prompt-sync')();

const x1String = prompt(`Type the first number? `);
const x1 = Number (x1String)

const x2String = prompt(`Type the second number? `);
const x2 = Number (x2String)

const y1String = prompt(`Type the third number? `);
const y1 = Number (y1String)

const y2String = prompt(`Type the fourth number? `);
const y2 = Number (y2String)


const numD =  ( Math.sqrt((Math.pow (x2-x1, 2)+(Math.pow (y2-y1,2))))) 


console.log (`The valor is: ${numD}`);