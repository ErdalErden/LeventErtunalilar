function UI() {

}

UI.prototype.addCarToUI = function (newCar) {
    //    <!-- <tr>
    //    <td><img src="" class="img-fluid img-thumbnail"></td>
    //    <td></td>
    //    <td></td>
    //    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    //  </tr> -->
    //  <!-- <tr>
    //    <td><img src="" class="img-fluid img-thumbnail"></td>
    //    <td></td>
    //    <td></td>
    //    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    //  </tr> -->
    const carList = document.getElementById("cars");
    carList.innerHTML += `
    <tr>
    <td><img src="${newCar.url}" width="200" class="img-fluid img-thumbnail"></td>
    <td>${newCar.title}</td>
    <td>${newCar.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    </tr>    
    `
}

UI.prototype.loadAllCars = function(cars){
    const carlist = document.getElementById("cars")
    cars.forEach(function(car){
        carlist.innerHTML += `
    <tr>
    <td><img src="${car.url}" width="200" class="img-fluid img-thumbnail"></td>
    <td>${car.title}</td>
    <td>${car.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    </tr>`
    })
}

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.titleCheck = function (title) {
    let result = true;
    if (title === "") {
        result = false;
    }
    return result;
}

UI.prototype.priceCheck = function (price) {
    let result = true;
    if (price === "") {
        result = false;
    }
    return result;
}
UI.prototype.urlCheck = function (url) {
    let result = true;
    if (url === "") {
        result = false;
    }
    return result;
}

UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    //Alert Divini oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2000)
}

UI.prototype.odak = function (control) {
    control.focus();
    control.select();
}