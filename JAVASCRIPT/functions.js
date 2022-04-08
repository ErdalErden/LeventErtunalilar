//Fonksiyonlar (functions)

function merhaba(){
    console.log("Merhaba");
}

merhaba();
merhaba();
merhaba();

//fonksiyona parametre atama

function selamVer(name,age){
    console.log(`İsim: ${name} yaş: ${age}`);
}

selamVer("Aslı",25);
selamVer("Kerem",37);

//yaş hesaplama
//kullanıcının doğum yılını alarak yaşını bulma
let currentYear = new Date().getFullYear();
function calcAge(birthYear){
    return currentYear - birthYear;
}
console.log(calcAge(1974));
console.log(calcAge(1968));


//ehliyet alabilme durumu hesaplama
function isAvailable(birthYear,name){
    let userAge = calcAge(birthYear);
    let drivingLicense = 18 - userAge;

    if(drivingLicense > 0){
        console.log(`${name} ehliyet alabilmene ${drivingLicense} yıl kaldı`)
    }
    else {
        console.log(`${name} ehliyet alabilirsin`);
    }
}

isAvailable(2005,"Erdal");
isAvailable(2006,"Can");
isAvailable(2004,"Kemal");