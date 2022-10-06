//part1
"use strict"
function parseAndDisplayName(Name) {
const space=" ";
const starting_index= 0;
let wheretocut=Name.indexOf(space);
let leftside=Name.substring(starting_index,wheretocut);
let rightside=Name.substring(wheretocut);

console.log("Name: "+Name);
console.log("First name: "+leftside);
console.log("Last name: "+rightside);
console.log(" ");

}
parseAndDisplayName("Brenda Key");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
