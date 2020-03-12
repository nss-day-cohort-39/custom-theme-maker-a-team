import { ScoreList } from "./sports/ScoreList.js"
import { NewsList } from "./news/NewsList.js"
import { FavoritesList } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"

export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
    `
}

const eventHub = document.querySelector("#container");

/*
*   Dispatches a custom event, backgroundColorChosen, to the eventHub (#container)
*   detail of the value of the element.startsWith (#btnTheme) is dispatched with the event.
*/
eventHub.addEventListener(
    "click", event => {
        if (event.target.id.startsWith("btnTheme--")) {
            let chosenButton = event.target.id;
            const changeBackgroundColorButtonClicked = new CustomEvent("backgroundColorChosen", {
                detail: {
                    button: chosenButton
                }
            })
            eventHub.dispatchEvent(changeBackgroundColorButtonClicked);
        }
    })

/*
 *  Listens for the custom event, backgroundColorChosen, checks the detail data sent with the event,
 *  removes any existing/conflicting css class and adds the corresponding class.
*/
eventHub.addEventListener("backgroundColorChosen", () => {
    const targetColorThemeClassContentElementsArray = document.querySelectorAll(".colorsSelector");
    if (event.detail.button === "btnTheme--red") {
        targetColorThemeClassContentElementsArray.forEach(e => {
            if (e.classList.startsWith("background--")) {
                e.classList = ("colorsSelector sizeSelector");
                e.classList.add("background--red");
            } else {
                e.classList.add("background--red");
            }
        });
    } else if (event.detail.button === "btnTheme--purple") {
        targetColorThemeClassContentElementsArray.forEach(e => e.classList.add("background--purple"));
    } else if (event.detail.button === "btnTheme--blue") {
        targetColorThemeClassContentElementsArray.forEach(e => e.classList.add("background--blue"));
    } else if (event.detail.button === "btnTheme--green") {
        targetColorThemeClassContentElementsArray.forEach(e => e.classList.add("background--green"));
    }
})

