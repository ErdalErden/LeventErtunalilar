//OBJECT LITERALS
let veri;
let user = {
    username:'erdalerden',
    firstName:'Erdal',
    lastName:'ERDEN',
    age:50,
    hobbies: ['Spor','Kitap','Sinema','Yazılım'],
    address:{
        city:'İstanbul',
        country:'Türkiye',
        phone:'05055555555',
    }
}

veri = user.username;
console.log(veri)

veri = user.lastName;
console.log(veri)

veri = user.hobbies;
console.log(veri)

veri = user.address.city;
console.log(veri)

veri = user.address.country;
console.log(veri)

veri = user.address.phone;
console.log(veri)


console.log(typeof user);