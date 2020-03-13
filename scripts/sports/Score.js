export const Score = score => `
    <section class="score">
        <header class="score__header">
            <h2>${score.team}</h2>
        </header>
        <p class="score__points">Score: ${score.points}</p>
        <p class="score__date">Date: ${score.timestamp}</p>
    </section>
`

/*
*   Listens for a custom event, backgroundColorChosen, from the eventHub (#container),
*   removes any class list associated with color themes, and applies the value sent as a class.
*/
export const changeScoreBackgroundColor = () => {
    const eventHub = document.querySelector("#container");
    const targetFavoriteElementBackgroundColorArray = document.querySelectorAll(".favorites");

    eventHub.addEventListener('backgroundColorChosen', event => {
        targetFavoriteElementBackgroundColorArray.forEach(e => {
                e.classList.remove('blue', 'red', 'green', 'purple');
                e.classList.add(event.detail.color);
            })
        }
    )
}