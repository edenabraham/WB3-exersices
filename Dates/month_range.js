let highSeason = false;

let d = new Date("july 21 2022") // start date

let y = d.getFullYear();

let rangeStart= new Date("june 1 " + y) //range start
let rangeEnd = new Date("august 31 " + y) //range end

if(d >= rangeStart && d <= rangeEnd){ //&& and
    highSeason = true;
}

console.log(highSeason);
