import { getOrders } from "./database.js"

const buildOrderListItem = (order) =>{
    return `<li>
    Order #${order.id} was placed on ${order.timestamp}
        </li>`
}

export const Orders = () => {

    const orders = getOrders() //this const in Orders function because if it was in global scope, we couldn't map it below

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}