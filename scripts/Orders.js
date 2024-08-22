export const Order = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=wheel&_expand=technology&_expand=interior")
    const orders = await response.json()
    console.log(orders)

    document.addEventListener(
        "click",
        displayOrderClick
    )

    let html = "<div class='list'>"

    const orderArray = orders.map(
        (order) => {
            return `<li>${order.paint.color} car with ${order.wheel.description}, ${order.interior.material}, and the ${order.technology.package} for a total cost of $${order.paint.price + order.interior.price + order.technology.price + order.wheel.price}</li>`
        }
    )
    html += orderArray.join(" ")

    return html + "</div>"
}

const displayOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "order"){
        Order()
    }
}