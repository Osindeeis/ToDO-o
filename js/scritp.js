"use strict"

const toDo = document.querySelector(".container")
const openForm = document.querySelector(".Add")
const addCard = document.querySelector(".AddCard")
let form = document.querySelector(".pop-up")
let Inputtitle = document.getElementById("title");
let InputText = document.getElementById("description");
let cards;


if(localStorage.card){
    cards = JSON.parse(localStorage.getItem("card"))
}
else{
    cards=[]
}



openForm.addEventListener("click", function () {
    form.style.opacity = 1;
    form.style.visibility = "visible";
})

function Card(title, description) {
    this.title = title;
    this.description = description;
    this.complete = false;
}

const CreateCard = (card, index) => {
    return `
    <div class="card">
    <h3 class="title">${card.title}</h3>
    <hr/>
    <p class="scroll">${card.description}</p>
    <label>Приоритет:
        <select>
            <option>Низкий</option>
            <option>Средний</option>
            <option>Высокий</option>
        </select>
    <label>

    <div class="card__row">
        <button class="remove">Удалить</button>
        <button class="change">Изменить</button>
    </div>
    
    </div>
    `
}

const Show = ()=>{
    toDo.innerHTML=""
    if(cards.length>0){
        cards.forEach((item,index) => {
            toDo.innerHTML += CreateCard(item,index); 
        });
    }
}

Show();

const updateLocal = ()=>{
    localStorage.setItem("card",JSON.stringify(cards))
}

addCard.addEventListener("click",function(){
    cards.push(new Card(Inputtitle.value,InputText.value))
    updateLocal();
    Show();
    form.style.opacity = 0;
    form.style.visibility = "hidden";
})
    