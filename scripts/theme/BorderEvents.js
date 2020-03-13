//events for border size



export const borderListener = () => {

    const eventHub = document.querySelector("#container")
    const borderTarget = document.querySelector(".borderSizes")
    const affectedItems = document.querySelectorAll("section")

    // Listen for browser generated click event in this component
    borderTarget.addEventListener("click", clickEvent => {

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

    eventHub.addEventListener("borderSize", event => {

        //check to see if one of the other border classes is already set
        if ("border" in event.detail) {
            affectedItems.forEach(e => {
                //remove extra border classes from the elements
                e.classList.remove('onepixel', 'threepixels', 'fivepixels')
                return e.classList.add(event.detail.border) //add the correct class to the elements
            })
        }

    })
}