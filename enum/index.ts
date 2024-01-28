// enum types(numeric, heterogenous, string): store constant | duplicate value is not allowed here

//  Numeric Type
enum NumericType {
    read = 1,
    save,
    delete,
}
// console.log(NumericType);

// string enum
enum StringType {
    fname = "Akbar",
    lname = " hossain",
    age = "28"
}
// console.log(StringType.fname);
// console.log(StringType["age"]);

// string enum
enum HeterogenousType {
    fname = "Akbar",
    lname = " hossain",
    age = "28"
}