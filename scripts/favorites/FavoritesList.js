import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}

export const changeFavoriteFontSize = () => {
    const eventHub = document.querySelector('#container')
    const favoriteItem = document.querySelectorAll('.favoriteItem')
    
    eventHub.addEventListener('fontSizeChanged', event => {
        if ("fontSize" in event.detail) {
            favoriteItem.forEach(e => {
                e.classList = []
                return e.classList.add(event.detail.fontSize)
            })
        }
    })
}