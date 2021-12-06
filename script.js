'use strict';

const openmodalBtn = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');
const closeMOdal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for(let i = 0; i < openmodalBtn.length; i++){
    openmodalBtn[i].addEventListener('click', openModal);
    closeMOdal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

const keypress = document.addEventListener('keydown', function(e){
    if(e.key === "Escape") {
        // closeModal();
       if(!modal.classList.contains("hidden")){
        closeModal();
       }
    }
});