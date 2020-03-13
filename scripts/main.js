import { Dashboard } from "./Dashboard.js"
import { colorButtonInitializationEvent } from "./theme/ColorButtons.js";
import { changeFavoriteBackgroundColor } from "./favorites/FavoritesList.js";
import { changeNewsBackgroundColor } from "./news/NewsList.js";
import { changeScoreBackgroundColor } from "./sports/ScoreList.js";


/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard();

colorButtonInitializationEvent();
changeScoreBackgroundColor();
changeNewsBackgroundColor();
changeFavoriteBackgroundColor();