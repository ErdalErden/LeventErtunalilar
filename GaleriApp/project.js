const form = document.getElementById("#car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

// UI Objesini başlatma
const ui = new UI();

// Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addCar());
}

function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if(title === "" || price === "" || url === ""){
        //Hata
    }
    else
    {
        //Yeni Araç
        const newCar = new Car(title,price,url);
        ui.addCarToUI(newCar);//arayüze araç ekleme

    }
}