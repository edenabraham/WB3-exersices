
function getFederalTax(grossPay,witholdingCode) {
    if(0 == witholdingCode){
        return grossPay * 0.23
} 
    else if (1 == witholdingCode) {
        return grossPay * 0.21
}
    else if (2 == witholdingCode) {
        return grossPay * 0.195
}
    else if (3 == witholdingCode) {
        return grossPay * 0.185
}
    else if (witholdingCode >= 4) {
        let over = witholdingCode -4;
        let extra= 0.005 * over;
        let rate= 0.18 - extra
        console.log("Rate: "+rate);
        return grossPay * rate
}
    else{
        console.log("Invalid Parameter for witholdingCode")
    }

}
console.log(getFederalTax(750, 0)); //person 1
console.log(getFederalTax(1550, 2));// person 2
console.log(getFederalTax(1100, 6));// person 3