import { getWheels } from "./database.js"

const wheels = getWheels()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             setSize(parseInt(event.target.value))
//         }
//     }
// )

export const WheelsOptions = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.option}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}