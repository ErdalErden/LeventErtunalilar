// Event Listener ve Event Objesi

//const btn = document.querySelector("#btnDeleteAll");
//const btnAddNewTask = document.querySelector("#btnAddNewTask");

//Yöntem 1
//btn.addEventListener("click",function(){
//    console.log("Butona Tıklandı");
//})


//Yöntem 2
//btn.addEventListener("click",btnClick);
//btnAddNewTask.addEventListener("click",btnClick);


//function btnClick(){
//    console.log("Butona Tıklandı");
//}

//btn.addEventListener("click", function(a){
//    let value;
//    value = a;
//    value = a.target; // tıklanan element
//    value = a.target.id; //tıklanan butonun id'si
//    value = a.target.classList; // tıklanan elementin sınıfları
//    value = a.type;//eventin tipi
//    a.preventDefault();
//    console.log(value);
//})

// Mouse Eventleri
const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");

// click eventi - tıklama
//btn.addEventListener("click",run);
//ul.addEventListener("click",run);

// double click eventi - çift tıklama
//btn.addEventListener("dblclick",run);

// mouse down eventi - tuşa basma
//btn.addEventListener("mousedown",run);

//mouse up eventi - tuşu bırakma
btn.addEventListener("mouseup",run);

function run(event){
    console.log(`event type: ${event.type}`);
}