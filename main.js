'use strict';

const addBtn = document.querySelector('.addBtn');
const list = document.querySelector('.list');
const input = document.querySelector('input');

let counter = 0;
let delBtn = [];

// 아이템 리스트 추가
function addList(){
    if(input.value===""){
        return;
    }
    
    let listItems= `<div class="listItem">
                            <span class="bukkit">${counter+1}. ${input.value}</span>
                            <button class="delBtn">X</button>
                        </div>`;


    list.innerHTML += listItems;
    input.value = "";

    
    // 아이템 리스트 제거
    delBtn = document.querySelectorAll('.delBtn');
    for(let i=0; i<=counter; i++){   
        delBtn[i].addEventListener('click', ()=>{
            let div = delBtn[i].parentNode;
            list.removeChild(div);

            --counter;
        });
    }
    
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




