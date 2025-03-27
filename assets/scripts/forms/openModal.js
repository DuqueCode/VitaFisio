import { loadFormsData } from "./fetchData.js"

export async function openModal(index) {
    const closeModal = document.querySelector("#closeModal")
    const modal = document.querySelector("#modal")
    const modalIframe = document.querySelector("#modal iframe")

    try {
        const formsData = await loadFormsData()

        if (formsData[index]) {
            modalIframe.src = formsData[index].src
            modal.classList.add("active")
            document.getElementsByTagName('body')[0].style.overflow = "hidden"
        } else {
            console.error("Formulário não encontrado para o índice:", index)
        }

    } catch (error) {
        console.error("Erro ao carregar os formulários:", error)
    }

    closeModal.addEventListener("click", () => {
        modalIframe.src = ""
        modal.classList.remove("active")
        document.getElementsByTagName('body')[0].style.overflow = "auto"
    })

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modalIframe.src = ""
            modal.classList.remove("active")
            document.getElementsByTagName('body')[0].style.overflow = "auto"
        }
    })
}