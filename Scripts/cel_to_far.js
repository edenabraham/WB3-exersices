function convertCtoF(currentTemp) {
    var Celsius=currentTemp
    var fahrenheit= (Celsius*9/5)+32;
    return fahrenheit;

}

let f= convertCtoF(100);
console.log(f);