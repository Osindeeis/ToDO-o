"use strict"

const toDo = document.querySelector(".container");
const openForm = document.querySelector(".Add");
const addCard = document.querySelector(".AddCard");
const title = document.querySelector(".Title");
const Error = document.querySelector(".Error");
let form = document.querySelector(".pop-up");
let Inputtitle = document.getElementById("title");
let InputText = document.getElementById("description");
let Select = document.querySelector("#priority");
let CloseForm = document.querySelector("close-button")
let cards;
let DateNow = new Date();

const FormatDate =()=>{
    const date = DateNow.getDate().toString().padStart(2, "0");
	const month = (DateNow.getMonth() + 1).toString().padStart(2, "0");
	const year = DateNow.getFullYear();

	const h = DateNow.getHours().toString().padStart(2, "0");
	const m = DateNow.getMinutes().toString().padStart(2, "0");

	return `${date}.${month}.${year}, ${h}ч ${m}м`;
};

const CreateTitle = () =>{
    if(cards.length <= 0 && JSON.parse(localStorage.getItem("card")) <= 0){
        title.innerHTML = `<h1>Список задач пуст</h1>`;
    }
    else{
        title.innerHTML = `<h1>Список задач</h1>`;
    }
};

if(localStorage.card){
    cards = JSON.parse(localStorage.getItem("card"));
}
else{
    cards = [];
};

openForm.addEventListener("click", ()=> {
    Display(1,"visible");
});

function Card(title, description, Select, Date) {
    this.title = title;
    this.description = description;
    this.Select = Select;
    this.Date=Date;
};

const FilterCard = () => {
    const LowPriority = cards.length && cards.filter(item => item.Select =="Low");
    const MiddlePriority = cards.length && cards.filter(item => item.Select =="Middle");
    const HighPriority = cards.length && cards.filter(item => item.Select =="High");
    cards = [...HighPriority,...MiddlePriority,...LowPriority];
};

const CreateCard = (card, index) => {
    return `
    <div class="card ${card.Select}">
        <h3 class="title">${card.title}</h3>
        <hr/>
        <p class="scroll">${card.description}</p>
        <label>Приоритет:
            <p class="priority">${card.Select}</p>
        </label>
            <p class="date">Дата: ${card.Date}</p>
        <div class="card__row">
            <button onClick='removeLocal(${index})' class="remove">Удалить</button>
        </div>
    </div>
    `
};

const removeLocal = (index) => {
    let Question = confirm("Вы действительно хотите удалить запись?")
    if(Question == 1){
        cards.splice(index,1);
        updateLocal();
        Show();
    }
};

const Show = () => {
    toDo.innerHTML = "" 
    if(cards.length > 0){
        FilterCard();
        cards.forEach((item,index) => {
            toDo.innerHTML += CreateCard(item,index); 
        });
    }
    CreateTitle();
};

Show();

const updateLocal = () => {
    localStorage.setItem("card",JSON.stringify(cards));
};

addCard.addEventListener("click", () => {
    
    if(InputText.value=='' || Inputtitle.value == ''){
        Error.innerHTML = "Поля пустые";
        return  
    }

    cards.push(new Card(Inputtitle.value,InputText.value, Select.value, FormatDate()))
    updateLocal();
    Show();
    Display(0,"hidden");
    

});

const Display =(opacity,visibility)=>{
    form.style.opacity = opacity;
    form.style.visibility = visibility;
}
    