import css from "./styles/styles.css"
import {storageAvailable,getFormItem} from "./utility.js"
import {ToDoItem} from "./items.js"
let sidebar = document.querySelector(".sidebar")
let sidebarAdd = document.querySelector(".sidebar .add")
let sidebarList = Array.from(sidebar.querySelectorAll(".label"))
let list = document.querySelector("div.list")

let addDialog = document.querySelector("#addcard")
let dialogSubmit = document.querySelector("form button[type='submit']")

let form = document.querySelector("form")
let CardsList = [[],[]];

let currentIndex = 0;

function changeMode(event){
    currentIndex = sidebarList.indexOf(event.target);
    list.innerHTML = "";
    CardsList[currentIndex].forEach(item => {
        let newItem = new ToDoItem(...Object.values(item));
        list.appendChild(newItem.getDOM());
    });
}
function showAddDialog(event){
    addDialog.show();
} 
function submitItem(event){
    let formmessage = getFormItem(form);
    let newItem = new ToDoItem(...Object.values(formmessage));
    list.appendChild(newItem.getDOM());
    //save to local storage
    CardsList[currentIndex].push(formmessage);
    CardsChange();
    console.table(CardsList);
}
//update local storage
function CardsChange(){
    localStorage.setItem("HasCardsList","true");
    localStorage.setItem("CardsList",JSON.stringify(CardsList));
}
if (!storageAvailable("localStorage")) {
    console.log("Error! No storage useable.")
}
else{
    if(localStorage.getItem("HasCardsList") !== null){
        CardsList = JSON.parse(localStorage.getItem("CardsList"));
    }
}
sidebarList.forEach(label => {
    label.addEventListener("click", changeMode);
});

sidebarAdd.addEventListener("click",showAddDialog);

dialogSubmit.addEventListener('click',submitItem);