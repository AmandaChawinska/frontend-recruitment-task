console.log("Witam serdecznie :)");

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

let counter= 0;

const spanCounter = document.querySelector(".modal-counter");
const button = document.querySelector(".container__button");
const buttonReset = document.querySelector(".container__reset");


function buttonClick() {
    counter++;
    spanCounter.textContent = counter;
    if (counter >=5){
        button.removeEventListener('click', buttonClick);
        const resetButton = document.querySelector(".container__reset");
        resetButton.classList.remove(".container__reset");
        
    }
}

function resetFunction() {
    counter--;
    spanCounter.textContent = 0;
    const resetButton=document.querySelector(".container__reset");
    resetButton.classList.add(".container__reset");
}

buttonReset.addEventListener('click', resetFunction);
button.addEventListener('click', buttonClick);

