class User {
  userName: string
  age: number
  constructor(userName:string, age:number) {
    this.userName = userName
    this.age = age
    }
    display(): void {
        console.log(`UserName: ${this.userName} Age: ${this.age}`);
    }
}

let user5 = new User("Munna", 23)
user5.display()
let user6 = new User("Tokir", 21)
user5.display()