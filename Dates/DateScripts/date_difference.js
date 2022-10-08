

let startDate= new Date("July 11, 2022 2:00 pm"); 
let endDate = new Date("November 11, 2022 2:00 pm"); 
let diff= endDate.getTime()-startDate.getTime();
let minPerDay=24*60*60*1000;
let howFar=diff/minPerDay
console.log("There are "+howFar.toFixed(0)+" days between "+startDate+" and "+endDate);



