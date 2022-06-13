"use strict"

const toDo = document.querySelector(".container")
const openForm= document.querySelector(".Add")
const addCard = document.querySelector(".AddCard")
let form = document.querySelector(".pop-up")
let Inputtitle = document.getElementById("title");
let InputText= document.getElementById("description");
let cards = [];
openForm.addEventListener("click",function(){
    form.style.opacity=1;
    form.style.visibility="visible";
})



function AddCard(title,description){
    const card={
        id:`${Math.random()}`,
        title,
        description,
        cardStatus:false
    };
    cards.push(card);
}

addCard.addEventListener("click",function(){
    AddCard(Inputtitle.value, InputText.value)
    form.style.opacity=0;
    form.style.visibility="hidden";
    showOnDisplay();
})

function showOnDisplay(){
let html='';

    cards.forEach(card => {
        if(card.cardStatus){
            return;
        }
        html += `
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
    })

    toDo.innerHTML=html;
}







