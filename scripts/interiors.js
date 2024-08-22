import { setInterior } from "./transientState.js"

export const getInterior = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener(
        "change",
        interiorChangeHandler
    )

    let html = `<select id="interior">
                    <option>Select Interior Fabric</option>
    `

    const interiorsArray = interiors.map(
        (interior, counter) => {
            counter += 1
            return `<option value="${counter}">${interior.material}</option>`
        }
    )
    html += interiorsArray.join("")
    return html + `</select>`
}

const interiorChangeHandler = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
       const chosenOption = parseInt(changeEvent.target.value)
       setInterior(chosenOption)
    }
 }