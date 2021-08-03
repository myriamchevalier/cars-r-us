import { getInteriors, getOrders, getPaintColors, getTechPackages, getWheels } from "./database.js"

const paintColors = getPaintColors()
const techPackages = getTechPackages()
const interiors = getInteriors()
const wheels = getWheels()

const buildOrderListItem = (order) =>{

    const foundPaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTechPackage = techPackages.find(
        (techPackage) => {
            return techPackage.id === order.techPackageId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const totalCost = foundPaintColor.price + foundInterior.price + foundTechPackage.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} will cost ${costString}
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