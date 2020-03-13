import { formatDate } from "../dateFormatter.js"

export const NewsItem = news => `
    <section class="newsItem">
        <header class="newsItem_header">
            <h2>${news.title}</h2>
        </header>
        <p class="newsItem_mood">Mood: ${news.mood}</p>
        <p class="newsItem_date">Date: ${formatDate(new Date(news.timestamp))}</p>
    </section>
`