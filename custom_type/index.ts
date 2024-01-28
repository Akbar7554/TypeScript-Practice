// let user = { userName: "Akbar Hossain", age: 28 }
// console.log(user);

// let players: object[]
// players = [{ name: "Montu" }, { name: "Takla" }]
// console.log(players);

let peoples: object[]
peoples = []

let user1: { boyName: string; age: number }
boy = { boyName: "Akbar hossain", age: 20 }
peoples.push(boy)
// console.log(boys);
let user2: { girlName: string; age: number }
girl = { girlName: "Xyz", age: 10 }
peoples.push(girl)
// console.log(users);

for (const key in peoples) {
  console.log(peoples[key]["boyName"], peoples[key]["age"])
}
