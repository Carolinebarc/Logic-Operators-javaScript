const prompt = require ('prompt-sync')()


const ageDString = prompt('Type your age in days? ');
const ageD = Number (ageDString)

const ageM =  ( ageD % 365 ) /30 ;


const ageY =   ageD/365 ;


const ageT =  (ageD%365)%30;

console.log(`Total years, ${ageY}, total months ${ageM}, total days lived  ${ageT}`) ;




