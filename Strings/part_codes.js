function getSupplier(code) {
    return code.slice(0, code.indexOf(":"));
}

// that returns all characters between the : and -
function getProductNumber(code) {
    return code.slice(code.indexOf(":") + 1, code.indexOf("-"));
}

// that returns all characters after the -
function getSize(code) {
    return code.slice(code.indexOf("-") + 1, code.indexOf(" "));
}

//BONUS
function getDescription(code) {
    return code.slice(code.indexOf(" ") + 1);
}

//Examples
part1 = "ACME:123-L the large (L) part 123 is supplied by ACME";
part2 = "DI:12345-M the medium (M) part 12345 is supplied by DI";
part3 = "ACE:1-12 the size 12 part 1 is supplied by ACE";

console.log("Suplier: " +getSupplier(part1));
console.log("Number: "+getProductNumber(part1));
console.log("Size: "+getSize(part1));
console.log(getDescription(part1));
console.log(" ")

console.log("Supplier: "+getSupplier(part2));
console.log("Number: "+getProductNumber(part2));
console.log("Size: "+getSize(part2));
console.log(getDescription(part2));
console.log("");

console.log("Supplier: "+getSupplier(part3));
console.log("Number: "+getProductNumber(part3));
console.log("Size: "+getSize(part3));
console.log(getDescription(part3));
console.log("");