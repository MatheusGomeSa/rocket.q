import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");



// pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
    // adiciona escuta
    button.addEventListener("click", (event) => handleClick(event));
});


// Pegar quando o marcar como lido for clicado

const deleteButton = document.querySelectorAll(".actions a.trash");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));
})


function handleClick(event, check = true) {
    event.preventDefault();
    const text = check ? "Marcar como lido" : "Excluir"
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    const roomId = document.querySelector("#room-id").dataset.id;

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    // Muda os texto de acordo com o tipo de botão clicado
    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`;
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
    // Abri modal
    modal.open()
}
