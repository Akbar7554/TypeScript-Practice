// Typescript built in type number, array, void, undefined, null, string
var Id;
var first;
var last;
var full;
var isActivated;
Id = 101;
first = 'Akbar';
last = ' hossain';
full = first.concat(last);
isActivated = false;
console.log("My Id : ".concat(Id, " | Full Name : ").concat(full, " | Admin : ").concat(isActivated));
console.log(full.split(" "));
console.log(full.toUpperCase());
console.log(full.toLowerCase());
function myName() {
    console.log("I am Akbar");
}
myName();
