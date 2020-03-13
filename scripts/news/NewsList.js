import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel scores">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}
/*
*   Listens for a custom event, backgroundColorChosen, from the eventHub (#container),
*   removes any class list associated with color themes, and applies the value sent as a class.
*/
export const changeNewsBackgroundColor = () => {
    const eventHub = document.querySelector("#container");
    const targetFavoriteElementBackgroundColorArray = document.querySelectorAll(".newsItem");

    eventHub.addEventListener('backgroundColorChosen', event => {
        targetFavoriteElementBackgroundColorArray.forEach(e => {
                e.classList.remove('blue', 'red', 'green', 'purple');
                e.classList.add(event.detail.color);
            })
        }
    )
}

export const changeNewsFontSize = () => {
    const eventHub = document.querySelector('#container')
    const newsItem = document.querySelectorAll('.newsItem')

    eventHub.addEventListener('fontSizeChanged', event => {
        if ("fontSize" in event.detail) {
            newsItem.forEach(e => {
                e.classList.remove('small', 'xsmall', 'large', 'xlarge')
                return e.classList.add(event.detail.fontSize)
            })
        }
    })
}

export const changeNewsBorderSize = () => {
    const eventHub = document.querySelector('#container')
    const newsItem = document.querySelectorAll('.newsItem')

    eventHub.addEventListener("borderSize", event => {
        //check to see if one of the other border classes is already set
        if ("border" in event.detail) {
            newsItem.forEach(e => {
                //remove extra border classes from the elements
                e.classList.remove('onepixel', 'threepixels', 'fivepixels')
                return e.classList.add(event.detail.border) //add the correct class to the elements
            })
        }

    })
}