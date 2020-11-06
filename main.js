'use strict';

const addBtn = document.querySelector('.addBtn');
const list = document.querySelector('.list');
const input = document.querySelector('input');

let counter = 0;

// 아이템 리스트 추가
function addList(){
    if(input.value===""){
        return;
    }
    
    let listItems= `<div class="listItem" data-id="${counter}">
                            <span class="bukkit">${counter+1}. ${input.value}</span>
                            <button class="delBtn" data-id="${counter}">X</button>
                        </div>`;


    list.innerHTML += listItems;
    input.value = "";

    

    
    counter++;
}

// input 에서 엔터키로 입력해도 함수호출
input.addEventListener('keypress', ()=>{
    if(window.event.keyCode == 13){
        addList();
    }
});

addBtn.addEventListener('click', ()=>{
    addList();
});

list.addEventListener('click', (event)=>{
    const id = event.target.dataset.id;
    if(event.target.className === 'delBtn'){
        if(id){
            const deleted = document.querySelector(`.listItem[data-id="${id}"]`)
            deleted.remove();
    
            --counter;
        }
    }
    
    
});



