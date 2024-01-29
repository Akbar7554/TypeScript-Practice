var users;
users = [];
var user1;
user1 = { userName: "xyz", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "pqr", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "mno", userId: 103 };
users.push(user3);
var getRequest;
getRequest = "DELETE";
// console.log(getRequest);
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
