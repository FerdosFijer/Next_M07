//! oop : instance of type guard/ type narrowing
//class define kortesi no 01:
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
  }
}
//class define kortesi no 02:
class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study koe`);
  }
}
//class define kortesi no 03:

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
  }
}

//! Instance make by function

/* const getUserInfo = (user: Person) => {
  if(user instanceof Student){
    user.doStudy(10);
  }else if (user instanceof Teacher){
    user.takeClass(5);
  }else{
    user.getSleep(15);
  }
}; */

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. Person");

getUserInfo(person1);

