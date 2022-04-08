//Dizi ve Objelerde Döngü Kullanımı

let cities = ["İstanbul","Ankara","İzmir","Eskişehir","Bursa"];

console.log("----------FOR METODU----------");
for (let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}
console.log("----------FOR İN METODU----------");
//for-in metodu
for (let i in cities){
    console.log(`İndex ${i} value ${cities[i]}`)
}

//for-each metodu
console.log("----------FOR EACH METODU----------");

cities.forEach(function (item){
    console.log(item);
});

let users = [
    {firstName:"Aslı", lastName:"Yılmaz"},
    {firstName:"Kerem", lastName:"Bilgin"},
    {firstName:"Tolga", lastName:"Mertoğlu"},
    {firstName:"Selin", lastName:"Şahin"},
];

console.log("----------FOR METODU----------");
//adları yazdır
for (let i=0; i<users.length; i++){
    console.log(users[i].firstName);
};

console.log("-------------------");
//soyadları yazdır
for (let i=0; i<users.length; i++){
    console.log(users[i].lastName);
};

console.log("-------------------");
//ad ve soyadı birleştir
for (let i=0; i<users.length; i++){
    console.log(users[i].firstName + " " + users[i].lastName);
};

console.log("-------------------");
//ad ve soyadı birleştir diğer yöntem
for (let i=0; i<users.length; i++){
    console.log(`${users[i].firstName} ${users[i].lastName}`);
};

console.log("-------------------");
//ad ve soyadı birleştir diğer yöntem
for(let i in users){
    console.log(`İndex:${i} value:${users[i].firstName} ${users[i].lastName}`)
}

console.log("----------MAP METODU----------");
//Map metodu
let veri = users.map(function(item){
    return item.firstName + " " + item.lastName;
});

for(let i = 0; i<veri.length;i++){
    console.log(veri[i]);
}

console.log("----------MAP METODU----------");
//rakamların karelerini alıp döndüren işlem
let numbers = [1,3,5,9,12];
let num = numbers.map(function(n){
    return n*n;
});
console.log(num);