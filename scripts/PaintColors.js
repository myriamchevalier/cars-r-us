import { getPaintColors } from "./database.js"

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
           window.alert(`User chose paint color option ${event.target.value}`)
        }
    }
)
export const PaintColorChoices = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = paintColors.map(paintColor => {
        return `<li>
            <input type="radio" name="paint" value="${paintColor.id}" /> ${paintColor.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}