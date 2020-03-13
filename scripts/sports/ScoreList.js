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
/*
*   Listens for a custom event, backgroundColorChosen, from the eventHub (#container),
*   removes any class list associated with color themes, and applies the value sent as a class.
*/
export const changeScoreBackgroundColor = () => {
    const eventHub = document.querySelector("#container");
    const targetFavoriteElementBackgroundColorArray = document.querySelectorAll(".score");

    eventHub.addEventListener('backgroundColorChosen', event => {
        targetFavoriteElementBackgroundColorArray.forEach(e => {
                e.classList.remove('blue', 'red', 'green', 'purple');
                e.classList.add(event.detail.color);
            })
        }
    )
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

export const changeScoreBorderSize = () => {
    const eventHub = document.querySelector('#container')
    const score = document.querySelectorAll('.score')

    eventHub.addEventListener("borderSize", event => {
        //check to see if one of the other border classes is already set
        if ("border" in event.detail) {
            score.forEach(e => {
                //remove extra border classes from the elements
                e.classList.remove('onepixel', 'threepixels', 'fivepixels')
                return e.classList.add(event.detail.border) //add the correct class to the elements
            })
        }

    })
}