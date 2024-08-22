const transientState = {
    "paintId": 0, 
    "interiorId": 0, 
    "wheelId": 0, 
    "technologyId": 0
}

export const setPaint = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setWheel = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const setTech = (chosenTech) => {
    transientState.technologyId = chosenTech
    console.log(transientState)
}

export const saveOrderSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("orderRefresh")
    document.dispatchEvent(customEvent)
}