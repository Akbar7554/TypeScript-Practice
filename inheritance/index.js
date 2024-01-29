var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// let user5 = new User("Munna", 23)
// user5.display()
// let user6 = new User("Tokir", 21)
// user5.display()
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(userName, age, teacherId) {
        var _this = _super.call(this, userName, age) || this;
        _this.teacherId = teacherId;
        return _this;
    }
    Teacher.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, " Age: ").concat(this.age, " Id : ").concat(this.teacherId));
    };
    return Teacher;
}(User));
var teacher = new Teacher("xyz", 23, 1350);
// teacher.display()
// New inheritance practice
var Animal = /** @class */ (function () {
    function Animal(animalName, animalType, animalAge) {
        this.animalName = animalName;
        this.animalType = animalType;
        this.animalAge = animalAge;
    }
    Animal.prototype.display = function () {
        console.log("Animal Name: ".concat(this.animalName, " Type: ").concat(this.animalType, " Age: ").concat(this.animalAge));
    };
    return Animal;
}());
var Pet = /** @class */ (function (_super) {
    __extends(Pet, _super);
    function Pet(animalName, animalType, animalAge, animalWeight) {
        var _this = _super.call(this, animalName, animalType, animalAge) || this;
        _this.animalWeight = animalWeight;
        return _this;
    }
    Pet.prototype.display = function () {
        console.log("Animal Name: ".concat(this.animalName, " | Type: ").concat(this.animalType, " | Age: ").concat(this.animalAge, " | Weight: ").concat(this.animalWeight, "gm"));
    };
    return Pet;
}(Animal));
var animal = new Pet("Pritty", "Cat", 1, 300);
animal.display();
