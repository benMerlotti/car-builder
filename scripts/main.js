import { getInterior } from "./interiors.js"
import { Order } from "./Orders.js"
import { getPaints } from "./paints.js"
import { saveButton } from "./saveButton.js"
import { getTech } from "./technologies.js"
import { getWheels } from "./wheels.js"


const container = document.querySelector("#container")

const render = async () => {
    const paintOptionsHTML = await getPaints()
    const interiorOptionsHTML = await getInterior()
    const techOptionsHTML = await getTech()
    const wheelOptionsHTML = await getWheels()
    const buttonHTML = saveButton()
    const orderHTML = await Order()
    const composedHTML = `
            <h1 class="title">Cars R Us</h1>
    
            <section class="selection-container">
                <div class="option">
                     <h2>Paints</h2>
                     ${paintOptionsHTML}
                 </div>
                 <div class="option">
                    <h2>Interior</h2>
                    ${interiorOptionsHTML}
                </div>
                <div class="option">
                    <h2>Wheels</h2>
                    ${wheelOptionsHTML}
                </div>
                <div class="option">
                    <h2>Technologies</h2>
                    ${techOptionsHTML}
                </div>
            </section>
            <section class="button">
                <div>
                ${buttonHTML}
                </div>
            </section>
            <section class="orders">
                <div>
                <h2>Custom Orders</h2>
                ${orderHTML}
                </div>
            </section>
        `

    container.innerHTML = composedHTML
}

document.addEventListener("orderRefresh", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()