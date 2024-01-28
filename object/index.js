// let user = { userName: "Akbar Hossain", age: 28 }
// console.log(user);
// let players: object[]
// players = [{ name: "Montu" }, { name: "Takla" }]
// console.log(players);
var users;
users = [];
var boys;
boys = { boyName: "Akbar hossain", age: 20 };
users.push(boys);
// console.log(boys);
var girls;
girls = { girlName: "Xyz", age: 10 };
users.push(girls);
// console.log(users);
for (var key in users) {
    console.log(users[key]["boyName"], users[key]["age"]);
}
