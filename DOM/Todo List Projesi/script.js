// Todo List Eleman ekleme

// Eleman seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener("submit", addNewItem);
    // delete an Item event
    taskList.addEventListener("click", deleteItem);
    //delete all Item
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewItem(e) {
    if (input.value === "") {
        alert("Bir Eleman Eklemelisiniz")
        //console.log("submit");
    }

    // li oluşturma
    const li = document.createElement("li");
    li.classList = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    //a (link) oluşturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // a elementini li'ye ekleme
    li.appendChild(a);

    // task-liste li ekleme
    taskList.appendChild(li);

    input.value = "";
    e.preventDefault();

}


// Todo List Eleman Silme

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek istediğinize eminmisiniz?")) {
            //console.log(e.target);
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

// Todo Listten Tüm Elemanları Silme

function deleteAllItems(e){
    if(confirm("Tüm kayıtları silmek istiyormusunuz")){
        taskList.childNodes.forEach(function(item){
            if(item.nodeType === 1){
                item.remove();
            }
        })        
    }
    // Alternatif Yöntem
    //taskList.innerHTML="";
}