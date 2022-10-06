
function convertFtoC(currentTemp) {
    var Fahrenheit=currentTemp
    var celsius= (Fahrenheit-32)*5/9;
    return celsius

}
let c= convertFtoC(212);
console.log(c);