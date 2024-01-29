class User {
  userName: string
  age: number
  constructor(userName: string, age: number) {
    this.userName = userName
    this.age = age
  }
  display(): void {
    console.log(`UserName: ${this.userName} Age: ${this.age}`)
  }
}

// let user5 = new User("Munna", 23)
// user5.display()
// let user6 = new User("Tokir", 21)
// user5.display()

class Teacher extends User {
  teacherId: number

  constructor(userName: string, age: number, teacherId: number) {
    super(userName, age)
    this.teacherId = teacherId
  }
  display(): void {
    console.log(
      `UserName: ${this.userName} Age: ${this.age} Id : ${this.teacherId}`
    )
  }
}
let teacher = new Teacher("xyz", 23, 1350)
// teacher.display()

// New inheritance practice

class Animal {
  animalName: string
  animalType: string
  animalAge: number
  constructor(animalName: string, animalType: string, animalAge: number) {
    this.animalName = animalName
    this.animalType = animalType
    this.animalAge = animalAge
  }
  display(): void {
    console.log(`Animal Name: ${this.animalName} Type: ${this.animalType} Age: ${this.animalAge}`)
  }
}

class Pet extends Animal {
  animalWeight: number
  constructor(
    animalName: string,
    animalType: string,
    animalAge: number,
    animalWeight: number
  ) {
    super(animalName, animalType, animalAge)
    this.animalWeight = animalWeight
  }
  display(): void {
    console.log(
      `Animal Name: ${this.animalName} | Type: ${this.animalType} | Age: ${this.animalAge} | Weight: ${this.animalWeight}gm`
    )
  }
}
let animal = new Pet("Pritty", "Cat", 1, 300)
animal.display()
