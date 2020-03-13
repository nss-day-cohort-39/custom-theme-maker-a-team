import { Dashboard } from "./Dashboard.js"
import { borderListener } from "./theme/BorderEvents.js"


/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard()

borderListener()