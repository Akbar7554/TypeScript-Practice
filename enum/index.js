// enum types(numeric, heterogenous, string): store constant | duplicate value is not allowed here
//  Numeric Type
var NumericType;
(function (NumericType) {
    NumericType[NumericType["read"] = 1] = "read";
    NumericType[NumericType["save"] = 2] = "save";
    NumericType[NumericType["delete"] = 3] = "delete";
})(NumericType || (NumericType = {}));
// console.log(NumericType);
// string enum
var StringType;
(function (StringType) {
    StringType["fname"] = "Akbar";
    StringType["lname"] = " hossain";
    StringType["age"] = "28";
})(StringType || (StringType = {}));
// console.log(StringType.fname);
// console.log(StringType["age"]);
// string enum
var HeterogenousType;
(function (HeterogenousType) {
    HeterogenousType["fname"] = "Akbar";
    HeterogenousType["lname"] = " hossain";
    HeterogenousType["age"] = "28";
})(HeterogenousType || (HeterogenousType = {}));
