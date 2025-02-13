import { getData, levelModal } from "./functions.js";

const url = `./data/levels.json`;

const data = await getData(url)


levelModal(data);









window.onclick = function(event){
    if(event.target == dialogBox){
        dialogBox.close();
    }
}
