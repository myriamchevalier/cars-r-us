import { InteriorMaterials } from "./Interiors.js";
import { PaintColorChoices } from "./PaintColors.js";
import { TechnologyPackages } from "./TechnologyPackages.js";
import { WheelsOptions } from "./WheelsOptions.js";

const paintColorChoices = PaintColorChoices()
const technologyPackages = TechnologyPackages()
const interiorMaterials = InteriorMaterials()
const wheelsOptions = WheelsOptions()

export const CarsRUs = () => {
    return `
    <h1>Cars 'R Us Dealership</h1>

        <section class="options">
            <article class="option__paint">
                <h2>Paint Color Options</h2>
                ${paintColorChoices}
            </article>

            <article class="option__interior">
                <h2>Interior Materials Option</h2>
                ${interiorMaterials}
            </article>

            <article class="option__tech">
                <h2>Technology Packages Options</h2>
                ${technologyPackages}
            </article>

            <article class="option__wheels">
                <h2>Wheels Options</h2>
                ${wheelsOptions}
            </article>

        </section>
    `
}