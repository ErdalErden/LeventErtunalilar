//ARRAYS


let names = ['Erdal','Mehmet','Arda', 'Kerem'];
let years = [1972,1990,1982,1978,1998];
let mix = ['arda','yilmaz',1992,null,undefined];
let hobbies = ['arzu','banu',['programlama','Javascript']];

console.log(names);
console.log(years);
console.log(mix);
console.log(hobbies);
console.log('names: '+names.length);
console.log('years: '+years.length);
console.log('mix: '+mix.length);
console.log('hobbies: '+hobbies.length);
console.log('alt hobbies: '+hobbies[2]);
console.log('alt hobbies: '+hobbies[2].length);

console.log(typeof names);
console.log('---------------------');

//get array item
console.log(names[0]);
console.log(names[3]);

//set array item
names[0] = 'Ercan';
console.log(names);

//add array item
names[4] = 'Cemal';
console.log(names);

//add array item Method 2
names[names.length] = 'Osman';
console.log(names);

//add item (dizinin sonuna ekler)
names.push('Eda');
console.log(names);

//add item (dizinin başına ekler)
names.unshift('Kemal');
console.log(names);

//remove item (dizinin sonundaki itemi siler)
years.pop();
console.log(years);

//remove item (dizinin başındaki itemi siler)
years.shift();
console.log(years);

//search item (dizinin içinde arama yapar) indexOf
let index = names.indexOf('Mehmet');
console.log('Mehmet\'in indexi:'+index);

//reverse array (dizinin sıralamısını tersine çevirir)
names.reverse();
console.log(names);

//dizi elemanlarını sıralama
years.sort();
console.log(years);

names.sort();
console.log(names);

//dizileri birleştirme
let veri = names.concat(years);
console.log(veri);

//diziye eleman ekle
names.splice(2,0,'Bülent');
console.log(names);

//dizi elemanını değiştir
names.splice(2,1,'Bülent');
console.log(names);