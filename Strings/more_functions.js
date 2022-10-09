//Part 1
let name= "Eden";let address= "6354 Center Dr";let city="Alanta";
let state="Georgia";
let zip="30097"

function displayMailingLabel(name,address,city,state,zip) {
    console.log("Name: "+name);
    console.log("Address: "+address);
    console.log("City: "+city+",")
    console.log("State: "+state)
    console.log("zip: "+zip);
}
displayMailingLabel("Eden","473 buton dr","Atlanta","Georgia","38827");

//Part 2
// dont need to but let num1 because it is being made in the function
//since we are doing omething with the variables made in the fucntion,
//the results have to be under the function
function addNumbers(num1,num2) {
    let results= Number (num1)+ Number (num2);
console.log(num1+" + "+num2+" = "+results);
}
addNumbers(7,9)

//Part 3
let totalDue=100; let amountPaid=132; let changeDue=amountPaid-totalDue;
function displayReceipt(totalDue, amountPaid) {
    console.log(amountPaid+"-"+totalDue+"="+changeDue )
}
displayReceipt(100, 132)

//part 4
displayReceipt(50,60)
addNumbers(1,2)