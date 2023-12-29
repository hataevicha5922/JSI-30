// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     return `Fullname is ${this.name} ${this.surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   getCourse() {
//     let course = new Date().getFullYear() - this.year;
//     if (course > 0 && course <= 5) {
//       return course;
//     } else if (course < 0) {
//       return "Yaer is not correct";
//     } else {
//       return "The student has already graduated from university";
//     }
//   }
// }

function Hamster () {

}

Hamster.prototype.food = []

Hamster.prototype.found = function (something) {
    this.food = [...this.food, something]
}

speedy = new Hamster()
lazy = new Hamster()

speedy.found("apple")
speedy.found("apple")
speedy.found("apple")
lazy.found("nut")

console.log(speedy.food)
console.log(lazy.food)

