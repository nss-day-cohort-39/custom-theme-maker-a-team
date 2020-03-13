export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}

const eventHub = document.querySelector("#container")
const borderTarget = document.querySelector(".borderSizes")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the border size buttons
    if (clickEvent.target.name === "pixelsize") { //match the radio button's name property

        // Get the chosen border size
        const chosenBorderSize = clickEvent.target.value

        const borderChosenEvent = new CustomEvent("borderSize", {
            detail: {
                border: chosenBorderSize
            }
        })

        eventHub.dispatchEvent(borderChosenEvent)
    }
})