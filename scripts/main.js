import { Dashboard } from "./Dashboard.js"
import { colorButtonInitializationEvent } from "./theme/ColorButtons.js";
import { changeFavoriteBackgroundColor } from "./favorites/FavoriteItem.js";
import { changeNewsBackgroundColor } from "./news/NewsItem.js";
import { changeScoreBackgroundColor } from "./sports/Score.js";


/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard();

colorButtonInitializationEvent();
changeFavoriteBackgroundColor();
changeNewsBackgroundColor();
changeScoreBackgroundColor();