import { addCustomCar } from "./database.js";
import { InteriorMaterials } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { PaintColorChoices } from "./PaintColors.js";
import { TechnologyPackages } from "./TechnologyPackages.js";
import { WheelsOptions } from "./WheelsOptions.js";

document.addEventListener(
    "click", (event) => {
        if (event.target.id === "orderButton"){
            addCustomCar()
        }
    }
)

export const CarsRUs = () => {
    return `
    <h1>Cars 'R Us Dealership</h1>

        <section class="options">
            <article class="option__paint">
                <h2>Paint Color Options</h2>
                ${ PaintColorChoices() }
            </article>

            <article class="option__interior">
                <h2>Interior Materials Option</h2>
                ${ InteriorMaterials() }
            </article>

            <article class="option__tech">
                <h2>Technology Packages Options</h2>
                ${ TechnologyPackages() }
            </article>

            <article class="option__wheels">
                <h2>Wheels Options</h2>
                ${ WheelsOptions() }
            </article>
        </section>
        <button id="orderButton">Build your dream car</button>

        <section class="orders">
            <h2>Custom Cars Orders</h2>
            ${ Orders() }
        </section>
    `
}