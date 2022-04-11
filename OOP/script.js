// let kaan = {
//     name:"Kaan",
//     yearOfBirth:2008,
//     job:"student",
// }

// val = kaan;
// console.log(val);


// Nesne (Object) Oluşturma 1. yöntem------------

// function Student(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     // console.log(this);

//     this.calculateAge = function(){
//         return 2022 - this.yearOfBirth;
//     }
// }

// Nesne (Object) Oluşturma 2. yöntem------------

// let Student = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function () {
//         return 2022 - this.yearOfBirth;
//     }
// }



// let kaan = new Student("Kaan", 2008, "Student");
// let Aylin = new Student("Aylin", 2005, "Student");

// console.log(kaan.name);
// console.log(kaan.yearOfBirth);
// console.log(kaan.job);
// console.log(kaan.calculateAge());

// console.log("------------")

// console.log(Aylin.name);
// console.log(Aylin.yearOfBirth);
// console.log(Aylin.job);
// console.log(Aylin.calculateAge());


// PROTOTYPE KONUSU -----------------------------

//let Person = function(name, yearOfBirth, job){
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}

//Person.prototype.calculateAge = function () {
//    return 2022 - this.yearOfBirth;
//}

//Person.prototype.getName = function(){
//    return this.name;
//}

//let Aylin = new Person("Aylin",1980,"teacher");
//let Kaan = new Person("Kaan",2005,"Student")

//console.log(Aylin.calculateAge()); 
//console.log(Aylin.getName());
//console.log(Aylin);

//console.log("------------")

//console.log(Kaan.calculateAge()); 
//console.log(Kaan.getName());
//console.log(Kaan);

// --------------------- AYRAÇ -------------

// Object.create metodu
let personProto = {
    calculateAge : function() {
        return 2021 - this.yearOfBirth;
    }
}

let kaan = Object.create(personProto);
kaan.name = "Kaan";
kaan.yearOfBirth = 2008;
kaan.job = "Student";

let aylin = Object.create(personProto,{
    name : {value : "aylin"},
    yearOfBirth : {value:1980},
    job : {value :"teacher"}
});


console.log(kaan);
console.log(kaan.calculateAge());
console.log(aylin);
console.log(aylin.calculateAge());

