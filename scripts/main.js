import { Dashboard } from "./Dashboard.js"
import { colorButtonInitializationEvent } from "./theme/ColorButtons.js";
import { changeScoreFontSize, changeScoreBorderSize, changeScoreBackgroundColor } from "./sports/ScoreList.js"
import { changeFavoriteFontSize, changeFavoriteBorderSize, changeFavoriteBackgroundColor, toggleFavoriteItems } from "./favorites/FavoritesList.js"
import { changeNewsFontSize, changeNewsBorderSize, changeNewsBackgroundColor } from "./news/NewsList.js"

/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard();

changeFavoriteBackgroundColor();
changeScoreBackgroundColor();
changeNewsBackgroundColor();

changeFavoriteFontSize()
changeScoreFontSize()
changeNewsFontSize()

changeFavoriteBorderSize()
changeScoreBorderSize()
changeNewsBorderSize()

colorButtonInitializationEvent();

//button toggle functions
toggleFavoriteItems()