const prompt = require('prompt-sync')();

const timeSecondsString = prompt(`Type the time in seconds? `);
const timeSecond= Number (timeSecondsString)

const timeHours=  timeSecond / 3600;
const timeMinutes =  (timeSecond % 3600) / 60 ;
const TimeSecond =   (timeSecond % 3600 ) % 60;

console.log(`Total hours, ${timeHours}, total minutes ${timeMinutes}, total seconds ${timeSecond}`);