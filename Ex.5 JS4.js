const prompt = require('prompt-sync')();

const grade1 = prompt(`Type the first grade? `);
const grade2 = prompt(`Type the second grade? `);
const grade3 = prompt(`Type the third grade? `);

const gradeM = prompt ((grade1*2+grade2*3+grade3*5)/10) 



console.log = (`Final grade: ${gradeM}`);