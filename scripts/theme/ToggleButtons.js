export const ToggleButtons = () => {
    return `
        <article class="toggle">
            <fieldset>
                <legend>Toggle Sections</legend>

                <button id="btnToggle--score">Sports Scores</button>
                <button id="btnToggle--newsItem">News</button>
                <button id="btnToggle--favoriteItem">Favorite Items</button>
            </fieldset>
        </article>
    `
}

const eventHub = document.querySelector('#container')

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith('btnToggle--')) {
        const [prefix, toggleOption] = clickEvent.target.id.split('--')
        const selectedToggleOption = toggleOption

        const changeToggleOption = new CustomEvent('toggleOptionClicked', {
            detail: {
                prefix: prefix,
                toggleOption: selectedToggleOption
            }
        })

        eventHub.dispatchEvent(changeToggleOption)
    }
})