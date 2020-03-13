export const NewsItem = news => `
    <section class="newsItem">
        <header class="newsItem_header">
            <h2>${news.title}</h2>
        </header>
        <p class="newsItem_mood">Mood: ${news.mood}</p>
        <p class="newsItem_date">Date: ${news.timestamp}</p>
    </section>
`

/*
*   Listens for a custom event, backgroundColorChosen, from the eventHub (#container),
*   removes any class list associated with color themes, and applies the value sent as a class.
*/
export const changeNewsBackgroundColor = () => {
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