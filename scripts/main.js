import { Dashboard } from "./Dashboard.js"
import { changeScoreFontSize } from "./sports/ScoreList.js"
import { changeFavoriteFontSize } from "./favorites/FavoritesList.js"
import { changeNewsFontSize } from "./news/NewsList.js"

/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard()

changeFavoriteFontSize()
changeScoreFontSize()
changeNewsFontSize()