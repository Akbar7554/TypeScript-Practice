type user = { userName: string, userId: number }

let users: user[]
users = []

let user1: user
user1 = { userName: "xyz", userId: 101 }
users.push(user1)

let user2: user
user2 = { userName: "pqr", userId: 102 }
users.push(user2)

let user3: user
user3 = { userName: "mno", userId: 103 }
users.push(user3)

// console.log(users);

type requestType = "GET" | "POST" | "PUT" | "DELETE"
let getRequest: requestType
getRequest = "DELETE"
// console.log(getRequest);

function requestHandler(requestType: requestType) {
    console.log(requestType);
}
requestHandler("POST")