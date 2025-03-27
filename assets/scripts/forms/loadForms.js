import { loadFormsData } from "./fetchData.js"
import { openModal } from "./openModal.js"

document.addEventListener("DOMContentLoaded", async () => {
    const ul = document.querySelector("#agendamentos .forms ul")
    const descriptionDiv = document.querySelector("#agendamentos .descricao")
    const descTitle = document.createElement("h3")
    const descText = document.createElement("p")
    
    if (!ul || !descriptionDiv) {
        console.error("Required elements not found in the DOM.")
        return
    }
    
    try {
        const formsData = await loadFormsData()
        
        if (formsData.length > 0) {
            descTitle.textContent = formsData[0].name
            descText.textContent = formsData[0].description
        }
        
        formsData.forEach((form, index) => {
            const li = document.createElement("li")
            const button = document.createElement("button")
            
            button.setAttribute("data-form-index", index)
            button.classList.add("btn")
            button.classList.add("secondary")
            button.classList.add("showModal")
            button.textContent = "➔ "+form.name
            button.addEventListener("click", () => openModal(index))
            
            button.addEventListener("mouseenter", () => {
                descTitle.innerText = form.name
                descText.innerText = form.description
            })
            
            descriptionDiv.appendChild(descTitle)
            descriptionDiv.appendChild(descText)
            li.appendChild(button)
            ul.appendChild(li)
        });
    } catch (error) {
        console.error("Error loading forms:", error)
    }
});
