import { getInteriors } from "./database.js"

const interiors = getInteriors()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             setSize(parseInt(event.target.value))
//         }
//     }
// )

export const InteriorMaterials = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.material}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}