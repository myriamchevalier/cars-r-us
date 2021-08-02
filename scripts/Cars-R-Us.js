import { InteriorMaterials } from "./Interiors.js";
import { PaintColorChoices } from "./PaintColors.js";
import { TechnologyPackages } from "./TechnologyPackages.js";
import { WheelsOptions } from "./WheelsOptions.js";

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
        </section>
    `
}