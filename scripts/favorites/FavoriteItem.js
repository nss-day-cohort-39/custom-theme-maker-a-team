export const FavoriteItem = favorite => `
    <section class="favoriteItem">
        <header class="favoriteItem_header">
            <h2>${favorite.title}</h2>
        </header>
        <p>
            <img class="favoriteItem_image" src="${favorite.url}" />
        </p>
        <p class="favoriteItem_date">Date: ${favorite.timestamp}</p>
    </section>
`

/*
*   Listens for a custom event, backgroundColorChosen, from the eventHub (#container),
*   removes any class list associated with color themes, and applies the value sent as a class.
*/
export const changeFavoriteBackgroundColor = () => {
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