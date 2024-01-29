var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, " Age: ").concat(this.age));
    };
    return User;
}());
var user5 = new User("Munna", 23);
user5.display();
var user6 = new User("Tokir", 21);
user5.display();
