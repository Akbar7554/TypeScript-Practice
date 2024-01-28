// let user = { userName: "Akbar Hossain", age: 28 }
// console.log(user);

// let players: object[]
// players = [{ name: "Montu" }, { name: "Takla" }]
// console.log(players);

let user: object[]
user = []

let boy: { boyName: string, age: number }
boy = { boyName: "Akbar hossain", age: 20 }
user.push(boy)
// console.log(boys);
let girl: { girlName: string, age: number }
girl = { girlName: "Xyz", age: 10 }
user.push(girl)
// console.log(users);

for (const key in user) {
    console.log(user[key]["boyName"], user[key]["age"]);
}