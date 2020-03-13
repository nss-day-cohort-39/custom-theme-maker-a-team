import { Dashboard } from "./Dashboard.js"
import { changeScoreFontSize, changeScoreBorderSize } from "./sports/ScoreList.js"
import { changeFavoriteFontSize, changeFavoriteBorderSize } from "./favorites/FavoritesList.js"
import { changeNewsFontSize, changeNewsBorderSize } from "./news/NewsList.js"

/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard()

changeFavoriteFontSize()
changeScoreFontSize()
changeNewsFontSize()

changeFavoriteBorderSize()
changeScoreBorderSize()
changeNewsBorderSize()