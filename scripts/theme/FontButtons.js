export const FontButtons = () => {
    return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `
}

const eventHub = document.querySelector('#container')

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith('btnFont--')) {
        const [prefix, fontSize] = clickEvent.target.id.split('--')
        const selectedFontSize = fontSize

        const changeFontSize = new CustomEvent('fontSizeChanged', {
            detail: {
                fontSize: selectedFontSize
            }
        })
        eventHub.dispatchEvent(changeFontSize)
    }
})
