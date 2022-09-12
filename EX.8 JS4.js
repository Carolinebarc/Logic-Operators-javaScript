const prompt = require('prompt-sync')()


const factoryCString = prompt (`Enter the factory cost? `);

const factoryC = Number(factoryC)



const taxesC = (factoryC * 0.45)

const distributionC =  ( factoryC * 0.28)  

const finalPrice =  (factoryC + taxesC + distributionC)


console.log(`The final price is: ${finalPrice}`);