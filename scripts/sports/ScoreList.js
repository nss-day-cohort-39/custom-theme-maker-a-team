import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}

export const changeScoreFontSize = () => {
    const eventHub = document.querySelector('#container')
    const score = document.querySelectorAll('.score')
    
    eventHub.addEventListener('fontSizeChanged', event => {
        if ("fontSize" in event.detail) {
            score.forEach(e => {
                e.classList.remove('small', 'xsmall', 'large', 'xlarge')
                return e.classList.add(event.detail.fontSize)
            })
        }
    })
}