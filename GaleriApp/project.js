const carform = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

// UI Objesini başlatma
const ui = new UI();

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
    carform.addEventListener("submit", addCar);
}

function addCar(e) {
    const title = titleElement.value.toUpperCase();
    const price = priceElement.value;
    const url = urlElement.value;

    if(ui.titleCheck(title) == false) {
        ui.displayMessages("Başlık Bilgisi Geçersiz","danger");
        ui.odak(titleElement);
    }else if(ui.priceCheck(price) == false) {
        ui.displayMessages("Fiyat Bilgisi Geçersiz","danger");
        ui.odak(priceElement);
    }else if(ui.urlCheck(url) == false) {
        ui.displayMessages("Resim Bilgisi Geçersiz","danger");
        ui.odak(urlElement);  
    }
    else {
        const newCar = new Car(title,price,url);
        ui.addCarToUI(newCar);//arayüze araç ekleme  
        ui.clearInputs(titleElement, priceElement, urlElement);
        ui.displayMessages("Araç başarıyla eklendi ...","success");
    }
    e.preventDefault();
}


