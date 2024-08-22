import { saveOrderSubmission } from "./transientState.js"

export const saveButton = () => {
    document.addEventListener(
        "click",
        handleOrderClick
    )
    return `<button id="order">ORDER</button>` 
}

const handleOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "order") {
        saveOrderSubmission()
    }
}