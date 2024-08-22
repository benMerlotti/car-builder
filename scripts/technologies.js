import { setTech } from "./transientState.js"

export const getTech = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener(
        "change",
        techChangeHandler
    )

    let html = `<select id="tech">
                    <option>Select Technology Package</option>
    `

    const technologiesArray = technologies.map(
        (tech, counter) => {
            counter += 1
            return `<option value="${counter}">${tech.package}</option>`
        }
    )
    html += technologiesArray.join("")
    return html + `</select>`
}

const techChangeHandler = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
       const chosenOption = parseInt(changeEvent.target.value)
       setTech(chosenOption)
    //    console.log(parseInt(chosenOption))
    }
 }