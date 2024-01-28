// let user = { userName: "Akbar Hossain", age: 28 }
// console.log(user);
// let players: object[]
// players = [{ name: "Montu" }, { name: "Takla" }]
// console.log(players);
var peoples;
peoples = [];
var user1;
boy = { boyName: "Akbar hossain", age: 20 };
peoples.push(boy);
// console.log(boys);
var user2;
girl = { girlName: "Xyz", age: 10 };
peoples.push(girl);
// console.log(users);
for (var key in peoples) {
    console.log(peoples[key]["boyName"], peoples[key]["age"]);
}
