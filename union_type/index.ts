let userId: (number | string )
userId = 110
userId = "110"

function myName(userId: string | number) {
console.log(userId);
}
myName(110)