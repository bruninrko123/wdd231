
const locationCards = document.querySelector("#locationCards");




async function getLocationData() {

    const url = `data/locations.json`;

    const response = await fetch(url);

    

    if(response.ok){

        const data = await response.json();

        

        data.forEach(element => {

            displayCards(element)
            
        });
    }

    

    
    
}

let counter = 0;

function displayCards(element){

    counter++;
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const figure = document.createElement("figure");
    const p = document.createElement("p");
    const address = document.createElement("address");
    const LearnButton = document.createElement("button")
    const img = document.createElement("img") ;


    // setting the values

    h2.textContent = element.name;
    img.src = element.picture_url;
    img.alt = element.name;
    img.loading = "lazy";
    img.width = 300;
    img.height = 200;
    figure.appendChild(img);
    p.textContent = element.description;
    address.textContent = element.address;
    LearnButton.textContent = "Learn more";

    

   
    
    article.append(h2, figure, p, address, LearnButton);

    locationCards.appendChild(article);
    
   
    LearnButton.addEventListener("click", () => {

        showStuff(element);
    })
               
                



}


getLocationData();





// doing the pop up thing

const popupDivP = document.querySelector("#pop-up p")
const closePopUp = document.querySelector("#pop-up button");

closePopUp.addEventListener("click", () =>{

    document.querySelector("#pop-up").classList.toggle("hide");
})



// getting the last visit time, if there is one

let lastVisit = localStorage.getItem("visitDateTime");

if(lastVisit)
{
    let now = new Date();

    console.log(lastVisit);

    lastVisit = new Date(lastVisit)

    
    const timeDifference = now - lastVisit;

    let differenceIndays = Math.floor(timeDifference / (1000*60*60*24))

    console.log(differenceIndays);

    

    if(differenceIndays < 1){

        popupDivP.textContent = "Back so soon! Awesome!";
    }

    else if(differenceIndays >= 1){

        popupDivP.innerHTML = `You last visited ${differenceIndays} days ago.`;
    }

}

else{

    popupDivP.textContent = `Welcome! Let us know if you have any questions.`;
    
}




// saving the date and time the user visited the website

let now = new Date();

localStorage.setItem("visitDateTime", now.toISOString());











// doing the learn more dialog box


const dialogBox = document.querySelector("#dialogBox");

const dialogName = document.querySelector("#dialogBox h2")

const dialogParagraph = document.querySelector("#dialogBox p");

const closeButton = document.querySelector("#dialogBox button");




function showStuff(element){
   
    dialogName.textContent = element.name;
    dialogParagraph.innerHTML = 
    `
    Opening Hours: ${element.opening_hours}<br>Contact Info: ${element.contact_info}<br>Website: <a href ="${element.website}">${element.website}</a>
    `;
    dialogBox.showModal();
}

closeButton.addEventListener("click", () => {

    dialogBox.close();
})


window.onclick = function(event){
    if(event.target == dialogBox) {
        dialogBox.close();
    }
}





















// footer, header and general things

const span = document.querySelector("#lastModified");



const lastModified = document.lastModified;


// span.textContent = lastModified;

span.innerHTML = `<strong> ${lastModified} </strong>`;








// hamburguer button

const hamburguer = document.querySelector("#menuHamb");

const navigation = document.querySelector("#animateMe");


hamburguer.addEventListener("click", () =>{

    hamburguer.classList.toggle('open');

    navigation.classList.toggle("open");
});