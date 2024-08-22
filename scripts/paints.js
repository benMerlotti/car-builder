import { setPaint } from "./transientState.js"

export const getPaints = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener(
        "change",
        paintChangeHandler
    )

    let html = `<select id="paint">
                    <option>Select Paint Color</option>
    `

    const paintsArray = paints.map(
        (paint, counter) => {
            counter += 1
            return `<option value="${counter}">${paint.color}</option>`
        }
    )
    html += paintsArray.join("")
    return html + `</select>`
}

const paintChangeHandler = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
       const chosenOption = parseInt(changeEvent.target.value)
       setPaint(chosenOption)
    }
 }