//CONDITIONALS - Koşullu Durumlar


const firstName = 'Çağla';
const userName = 'caglayilmaz';
const age = 20;
const isStudent = true;
const school = 'university';

if (userName == 'caglayilmaz') {
    console.log('Merhaba Çağla');
} else {
    console.log('Kullanıcı bulunamadı');
}


if (age === 20) {
    console.log('yaşınız 20');
}

if(isStudent){
    console.log('Hangi bölümde okuyorsunuz?');
} else {
    console.log('Mesleğiniz nedir?')
}

if(age >= 18) {
    if(school=='university') {
        console.log('Ehliyet alabilirsiniz')        
    } else {
        console.log('Ehliyet için Eğitim durumunuz uygun değil')
    }
} else {
    console.log('Yaşınız ehliyet için yetersiz')
}

let id = '654987321'
if (typeof id != 'undefined'){
    console.log('id: '+id)
}else{
    console.log('No ID')
}


console.log('--------------')