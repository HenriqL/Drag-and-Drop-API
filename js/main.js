
//App

//Start para poder movimentar os cardas 

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach( card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')
}
function dragend(){
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

//Entrada e saida dos cards nas zonas

dropzones.forEach( dropzone =>{
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleaver', dragleaver)
    dropzone.addEventListener('drop', drop)
})
function dragenter(){
}
function dragover(){
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}
function dragleaver(){}
function drop(){}