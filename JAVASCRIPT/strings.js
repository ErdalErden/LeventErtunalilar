//STRINGS

const firstName = "Erdal";
const lastName = "ERDEN";
const age = "47";
let hobbies = "formula1,sinema,spor,kitap";

let veri;

//String birleştirme
//Yöntem 1
veri = firstName+" "+lastName;

//Yöntem 2
veri = "Erdal";
veri += " ERDEN";

//Yöntem 3
veri = 'Benim adım '+firstName+' '+lastName+' yaşım '+age+ ' ve İstanbul\'da yaşıyorum';

//Yöntem 4
veri = firstName.concat(' ', lastName);

//Büyük harfe çevirme
veri = veri.toUpperCase();

//Küçük harfe çevirme
veri = veri.toLocaleLowerCase();

//Parça alma - Başlangıç ve bitiş pozisyonunu girerek
//veri = veri.substring(2,5);

//Parça alma - Slice metodu
//veri = veri.slice(1,5);

//String içerisinde karakter arama metodu indexOf
//string içerisinde bulunmayan bir karakteri aramak istersek
//sonuç -1 döner
//veri = veri.indexOf("d");

//String içerisindeki veriyi güncellemek
veri = veri.replace('erd','ism');

//Stringin uzunluğunu almak için
//veri = veri.length;

veri = hobbies.split(',');

console.log(veri);
console.log(typeof veri);