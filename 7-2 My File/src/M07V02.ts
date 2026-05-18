//! Inheritance, the 1st pilar of OOP ::Akta class er property or method onno akta child class e inherated obbostay thaka k inheritance bole

//* Example: 01

/* class Student {
    name: string; // common
    age: number;  // common
    address: string; // common

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // common
    getSleep(numOfHours:number) { //numOfHours parameter define korsi from outer world which not exist in the class
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }
}
const student1 = new Student(`Mr. fakibaaz`, 18, "Bangladesh");
student1.getSleep(15); */

//* Example: 02

/* class Teacher {
    name: string; // common
    age: number; // common
    address: string; // common
    designation: string; // own extra property

    constructor(name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    // common
    getSleep(numOfHours:number) {
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }
    // own method
    takeClass(numOfClass:number) {
        console.log(`${this.name} ${numOfClass} ghonta class ney`);
    }
}
const teacher1 = new Teacher(`Mr. Smart`, 30, "Bangladesh", 'Ass. Teacher');
teacher1.takeClass(5); */


//* From example 01 and 02 common

class Person {

    name: string; // common
    age: number;  // common
    address: string; // common

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // common
    getSleep(numOfHours:number) { 
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }
}
//Part 1
class Student1 extends Person {}
const student1 = new Student1(`Mr. fakibaaz`, 18, "Bangladesh");
student1.getSleep(15);

//Part 2
class Student2 extends Person {
  rollNo: number;
  constructor(name: string,age: number,address: string, rollNo: number){
    super(name, age, address)
    this.rollNo = rollNo;
  }
}
const student2 = new Student2(`Mr. fakibaaz2`, 20, "Bangladesh", 181);
student2.getSleep(5)

//Part 3
class Teacher extends Person {
    designation: string; // own extra property
    constructor(name: string,age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }
    // own method
    takeClass(numOfClass:number) {
        console.log(`${this.name} ${this.designation} ${numOfClass} ghonta class ney`);
    }
}
const teacher1 = new Teacher(`Mr. Smart`, 30, "Bangladesh", 'Ass. Teacher');
teacher1.takeClass(5)
teacher1.getSleep