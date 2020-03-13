export const ColorButtons = () => {
    return `
        <article class="colors">
            <fieldset>
                <legend>Background Colors</legend>

                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
            </fieldset>
        </article>
    `
}
/*
*   Dispatches a custom event, backgroundColorChosen, to the eventHub (#container)
*   detail of the value of the element.startsWith (#btnTheme) is dispatched with the event.
*/
export const colorButtonInitializationEvent = () => {
    const eventHub = document.querySelector("#container");

    eventHub.addEventListener(

        "click", event => {
            if (event.target.id.startsWith("btnTheme--")) {
                const [prefix, chosenColor] = event.target.id.split("--");
                const changeBackgroundColorButtonClicked = new CustomEvent("backgroundColorChosen", {

                    detail: {
                        color: chosenColor
                        }
                })
            eventHub.dispatchEvent(changeBackgroundColorButtonClicked);
            }
        }
    )
}