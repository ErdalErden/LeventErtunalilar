//Loop - Döngüler


console.log('------while loop-------');
// while loop
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

console.log('------while loop-------');

let j = 10;
while (j>0) {
    console.log(j)
    j--;
}

console.log('------break ve continue-------');

// break ve continue
let a = 0;
while (a<10) {
    console.log(a);
    if(a==5){
        break;
    }
    a++;
}

//Sonsuz döngüye neden olduğundan yoruma dönüştürüldü
//console.log('------AYRAÇ-------');
//let m = 0;
//while (m<10){
//    if(m==3){
//        continue;
//    }
//    console.log(m);
//    m++;
//}




console.log('------do while loop-------');
// do while loop
let c = 0;
do {
    console.log("C=" + c);
    c++
} while (c<10);

console.log('------for loop-------');
// for loop

for (let n = 0; n < 10; n++) {
    console.log("n=" + n);
    
}

console.log('------AYRAÇ-------');
for(let k=0; k<10; k++){
    if(k==4){
        console.log("k=>" + k);
        continue;
    }
    console.log(k);
}

console.log('------AYRAÇ-------');
for(let k=0; k<10; k++){
    if(k==6){
        console.log("k=>" + k);
        break;
    }
    console.log(k);
}

console.log('------AYRAÇ-------');
let toplam=0;
for(let z=1; z<10; z++){
    toplam+=z;
}
console.log(`Toplam:${toplam}`);


