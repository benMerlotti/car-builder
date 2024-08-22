import { setWheel } from "./transientState.js"

export const getWheels = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener(
        "change",
        wheelChangeHandler
    )

    let html = `<select id="wheel">
                    <option>Select Wheel Type</option>
    `

    const wheelsArray = wheels.map(
        (wheel, counter) => {
            counter += 1
            return `<option value="${counter}">${wheel.description}</option>`
        }
    )
    html += wheelsArray.join("")
    return html + `</select>`
}

const wheelChangeHandler = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
       const chosenOption = parseInt(changeEvent.target.value)
       setWheel(chosenOption)
    //    console.log(parseInt(chosenOption))
    }
 }