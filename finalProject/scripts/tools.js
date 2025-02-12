//displaying the cards

const toolCards = document.querySelector("#toolCards");



// fetching data from the JSON file and displaying the cards

import { getData, displayToolCards } from "./functions.js";


const url = "./data/cards.json";

const data = await getData(url);

await displayToolCards(data);



// stop the modal


const closeButton = document.querySelector("#dialogBox button");

closeButton.addEventListener("click", () =>{
    dialogBox.close()
})


window.onclick = function(event){
    if(event.target == dialogBox){
        dialogBox.close();
    }
}






