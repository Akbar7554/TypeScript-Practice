// Typescript built in type number, array, void, undefined, null, string

let Id: number
let first: string
let last: string
let full: string
let isActivated: boolean

Id = 101
first = 'Akbar'
last = ' hossain'
full = first.concat(last)
isActivated = false

console.log(`My Id : ${Id} | Full Name : ${full} | Admin : ${isActivated}`);
console.log(full.split(" "));
console.log(full.toUpperCase());
console.log(full.toLowerCase());

function myName() : void {
    console.log("I am Akbar");
}
myName()