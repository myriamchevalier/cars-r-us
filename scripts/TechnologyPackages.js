import { getTechPackages } from "./database.js"

const techPackages = getTechPackages()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             setSize(parseInt(event.target.value))
//         }
//     }
// )

export const technologyPackages = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = techPackages.map(techPackage => {
        return `<li>
            <input type="radio" name="wheel" value="${techPackage.id}" /> ${techPackage.package}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}