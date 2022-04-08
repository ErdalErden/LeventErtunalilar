//let veri;

//veri = window.document;
//veri = window.document.head;
//veri = window.document.body;
//veri = window.document.URL;
//veri = window.document.domain;
//veri = window.document.images;
//veri = window.document.forms;
//veri = window.document.forms[0].id;
//veri = window.document.forms[0].method;
//veri = window.document.forms[0].action;
//veri = window.document.scripts;
//veri = window.document.scripts[0];

// Elementlerin Seçilmesi
// -- Tek Element Seçimi --
// document.getElementById() metodu


//veri = document.getElementById("header");
//veri = document.getElementById("header").id;
//veri = document.getElementById("header").className;

//veri = document.getElementById("header");
//veri = veri.id;
//veri = veri.className;

//veri.style.color = "blue";
//veri.style.fontSize = "50px"
//veri.style.fontWeight = "bold"

//document.getElementById("header").innerText = "Yapılacaklar";
//document.getElementById("header").innerHTML = "<b>ToDo List</b>";

// -- document.querySelector() metodu --
//console.log(document.querySelector("#header"));
//console.log(document.querySelector(".card-header"));
//console.log(document.querySelector("div"));
//document.querySelector("li").style.color = "blue";
//document.querySelector("li:last-child").style.color = "blue";
//document.querySelector("li:nth-child(2)").style.color = "green";
//document.querySelector("li:nth-child(3)").style.color = "red";

//document.querySelector("li").className = "list-group-item list-group-item-primary";
//document.querySelector("li").classList.add("active");




// Elementlerin Seçilmesi
// -- Çoklu Element Seçimi --
// document.getElementByClassName() metodu

//veri = document.getElementsByClassName("list-group-item");
//veri = document.getElementsByClassName("list-group-item")[0];
//veri = document.getElementsByClassName("list-group-item")[2];
//veri = veri[2];

//veri[1].style.fontSize = "30px";
//veri[1].style.color = "red";
//veri[2].textContent = "New Item";


//for (let i=0;i<veri.length;i++){
//    console.log(veri[i].style.color="orange")
//    console.log(veri[i].textContent="New Item");
//}

// document.getElementByTagName() metodu

//veri = document.getElementsByTagName("li");
//veri = document.getElementsByTagName("a");
//veri = document.getElementById("task-list").getElementsByTagName("a");

// document.querySelectorAll() metodu
//veri = document.querySelectorAll("li");
//veri.forEach(function(item,index){
//item.textContent=`${index} - item`;
//})

//DOM - Elementler üzerinde Gezinme

//let value;

//const todoList = document.querySelector(".list-group");
//const todo = document.querySelector(".list-group-item:nth-child(2");
//const card = document.querySelector(".card");

//value = todoList;
//value = todo;
//value = card;

// Child Nodes

//value = todoList.childNodes;
//value = todoList.children;
//value = todoList.children[todoList.children.length - 1];
//value = todoList.children[1].textContent = "Değişen Madde";

//value = card;
//value = card.children;
//value = card.children[1].children[0].textContent = "merhaba";

//value = todoList;
//value = todoList.children[0];
//value = todoList.firstElementChild;
//value = todoList.lastElementChild;
//value = todoList.children.length;
//value = todoList.childElementCount;

//value = card;
//value = card.parentElement;
//value = card.parentElement.parentElement;

//value = todo;
//value = todo.previousElementSibling;
//value = todo.nextElementSibling;
//value = todo.nextElementSibling.nextElementSibling;

//console.log(value);

// DOM - Element Oluşturma
//const li = document.createElement("li");

// add class
//li.className="list-group-item list-group-item-secondary";

// add attribute
//li.setAttribute("title","new item");
//li.setAttribute("data-id","5");

// add text
//const text = document.createTextNode("new item");
//li.appendChild(text);

// add link
//const a = document.createElement("a");
//a.setAttribute("href","#");

// add class
//a.className = "delete-item float-right";

// add icon
//a.innerHTML='<i class="fas fa-times"></i>';

// append to list
// li.appendChild(a);

// append to ul;
//document.querySelector("#task-list").appendChild(li);

// DOM - Element Silme

//const taskList = document.querySelector("#task-list");

//taskList.remove();
//taskList.children[0].remove();
//taskList.removeChild(taskList.children[3]);

// Attribute silme
//taskList.children[1].removeAttribute("class");

//for (let i=0;i<taskList.children.length;i++){
//    taskList.children[i].removeAttribute("class");
//}

// Element Güncelleme
const cardHeader = document.querySelector(".card-header")
const h2 = document.createElement("h2");

h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("Yeni Listeler"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);

console.log(cardHeader);


// classlarda güncelleme

const taskList = document.querySelector("#task-list");

let value;

link = taskList.children[0].children[0];

value = link.className;
value = link.classList;
//value = link.classList[0];
//value = link.classList[1];

link.classList.add("new");
link.classList.remove("new");

// Attribute güncelleme
value = link.getAttribute("href");
value = link.setAttribute("href","https://instagram.com")


console.log(value);


