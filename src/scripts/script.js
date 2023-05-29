/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function showModal(){
    const button = document.querySelector(".btn-cadastrar");
    const modalContainer = document.querySelector("#modalContainer");
    const closeButton = document.querySelector(".closeMo");

    button.addEventListener("click", () => {
        modalContainer.showModal();
    })

    closeButton.addEventListener("click", () => {
        modalContainer.close();
    });
}

showModal();