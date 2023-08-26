'use strict';
const btns=document.querySelectorAll('.show-modal');
// console.log(btns,typeof btns)
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closemodal1=document.querySelector('.close-modal');
// console.log(closemodal1)

const openModel=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
const closeModel=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

for(let i=0 ; i<btns.length;i++){
    console.log(btns[i].textContent)
    btns[i].addEventListener('click',openModel);
}
    overlay.addEventListener('click',closeModel);
    closemodal1.addEventListener('click',closeModel);

    document.addEventListener('keydown',function(w){
        console.log(w.key)
        if(!modal.classList.contains('hidden') && w.key==='Escape'){
            closeModel()
        }
    })
