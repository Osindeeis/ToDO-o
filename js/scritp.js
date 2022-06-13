"use strict"

const toDo = document.querySelector(".container")

let cards = [];

function AddCard(title,description){
    const card={
        id:`${Math.random()}`,
        title,
        description,
        cardStatus:false
    };
    cards.push(card);
}

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

AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
AddCard('Хлеб','Завтра в 10 утра сходит в магазин и купить там хлеб')
showOnDisplay();