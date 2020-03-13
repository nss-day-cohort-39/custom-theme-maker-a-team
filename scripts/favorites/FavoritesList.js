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
    /*
     *   Listens for a custom event, backgroundColorChosen, from the eventHub (#container),
     *   removes any class list associated with color themes, and applies the value sent as a class.
     */
export const changeFavoriteBackgroundColor = () => {
    const eventHub = document.querySelector("#container");
    const targetFavoriteElementBackgroundColorArray = document.querySelectorAll(".favoriteItem");

    eventHub.addEventListener('backgroundColorChosen', event => {
        targetFavoriteElementBackgroundColorArray.forEach(e => {
            e.classList.remove('blue', 'red', 'green', 'purple');
            e.classList.add(event.detail.color);
        })
    })
}

export const changeFavoriteFontSize = () => {
    const eventHub = document.querySelector('#container')
    const favoriteItem = document.querySelectorAll('.favoriteItem')

    eventHub.addEventListener('fontSizeChanged', event => {
        if ("fontSize" in event.detail) {
            favoriteItem.forEach(e => {
                e.classList.remove('small', 'xsmall', 'large', 'xlarge')
                return e.classList.add(event.detail.fontSize)
            })
        }
    })
}

export const changeFavoriteBorderSize = () => {
    const eventHub = document.querySelector('#container')
    const favoriteItem = document.querySelectorAll('.favoriteItem')

    eventHub.addEventListener("borderSize", event => {
        //check to see if one of the other border classes is already set
        if ("border" in event.detail) {
            favoriteItem.forEach(e => {
                //remove extra border classes from the elements
                e.classList.remove('onepixel', 'threepixels', 'fivepixels')
                return e.classList.add(event.detail.border) //add the correct class to the elements
            })
        }

    })
}

//show/hide the favorite items when toggle button is pressed
export const toggleFavoriteItems = () => {
    const eventHub = document.querySelector('#container')
    const favorites = document.querySelector('.favorites')

    eventHub.addEventListener("toggleOptionClicked", event => {
        if (event.detail.toggleOption === 'favoriteItem') {
            favorites.classList.toggle('hidden');
        }
    })
}