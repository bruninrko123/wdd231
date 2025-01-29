import { temples } from "../data/temples.js";

//console.log(temples);



import { url } from "../data/temples.js";

//console.log(url);





// referencing elements

const title = document.querySelector("#mydialog div h2");
const closeButton = document.querySelector("#mydialog div button");
const templeDetails = document.querySelector("#mydialog p");
const dialogBox = document.querySelector("#mydialog");
const showHere = document.querySelector("#showHere");





//close button

closeButton.addEventListener("click", () =>{

    dialogBox.close();
})





//displaying items

function displayItems(data){

    data.forEach(currentTemple => {
        
        const templeImage = document.createElement("img");

        templeImage.src = `${url}${currentTemple.path}`;
        templeImage.alt = `${currentTemple.name}`;

        //adding the event listeners

        templeImage.addEventListener("click", () => {

            showStuff(currentTemple);
        })


        showHere.appendChild(templeImage);
    });
}

displayItems(temples);//


//showStuff function

function showStuff(currentTemple){

    title.textContent = currentTemple.name;
    templeDetails.innerHTML = `Dedicated in ${currentTemple.dedicated} by ${currentTemple.person}<br>Number: ${currentTemple.number}`;
    dialogBox.showModal();
}