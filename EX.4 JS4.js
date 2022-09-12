const prompt = require('prompt-sync')();

const num1String = prompt(`Type the first number? `);
const Num1 = Number (num1String)

const num2String = prompt(`Type the second number? `);
const num2 = Number (num2String)

const num3String = prompt(`Type the third number? `);
const num3 = Number (num3String)

const Num1 =  (Num1>0) 
const timeMinutes = (num2>0);
const TimeSeconds = (num3>0);
const numR = (Math.pow (Num1+num2,2)) 
const numS =  (Math.pow (num2+num3,2))
const numD = ((numR+numS)/2)


console.log (`Expression valor is, ${numD}`);