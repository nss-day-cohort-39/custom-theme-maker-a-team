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