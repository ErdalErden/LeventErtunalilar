const carform = document.getElementById("car-form");
const titleElement = document.getElementById("title");
const priceElement = document.getElementById("price");
const urlElement = document.getElementById("url");

// UI Objesini başlatma
const ui = new Ui();

// Tüm eventleri yükleme
eventListeners();

function eventListeners(){ 
    carform.addEventListener("submit", addCar);
}

function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if(title === "" || price === "" || url === ""){
        //Hata
    }
    else{
        //Yeni Araç
        const newCar = new Car(title,price,url);
        ui.addCarToUi(newCar);//arayüze araç ekleme
    }
}