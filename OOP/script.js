// let kaan = {
//     name:"Kaan",
//     yearOfBirth:2008,
//     job:"student",
// }

// val = kaan;
// console.log(val);


// Nesne (Object) Oluşturma 1. yöntem
// function Student(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     // console.log(this);

//     this.calculateAge = function(){
//         return 2022 - this.yearOfBirth;
//     }
// }

let Student = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function () {
        return 2022 - this.yearOfBirth;
    }
}



let kaan = new Student("Kaan", 2008, "Student");
let Aylin = new Student("Aylin", 2005, "Student");

console.log(kaan.name);
console.log(kaan.yearOfBirth);
console.log(kaan.job);
console.log(kaan.calculateAge());

console.log("------------")

console.log(Aylin.name);
console.log(Aylin.yearOfBirth);
console.log(Aylin.job);
console.log(Aylin.calculateAge());



