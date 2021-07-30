import { getTechPackages } from "./database.js"

const techPackages = getTechPackages()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
           window.alert(`User chose technology package ${event.target.value}`)
        }
    }
)

export const TechnologyPackages = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = techPackages.map(techPackage => {
        return `<li>
            <input type="radio" name="technology" value="${techPackage.id}" /> ${techPackage.package}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}