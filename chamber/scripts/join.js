// variables

const dialogBox = document.querySelector("#dialogBox");
const h2 = document.querySelector("#dialogBox h2");
const ul = document.querySelector("#dialogBox ul");
const p = document.querySelector("#dialogBox p");
const cardsDiv = document.querySelector("#cards")
const closeButton = document.querySelector("#dialogBox button");

//Creating the cards dynamically

async function getLevelData(source){

    const response = await fetch(source);

    if(response.ok){

        const data = await response.json();

        console.table(data);

        displayLevelCards(data);

    }

}

const source = "data/levels.json";

getLevelData(source);

function displayLevelCards(data){

    const cardsSection = document.querySelector("#cards");
    data.forEach(element => {
    
        let section = document.createElement("section");
        let className = `${element.level}`;
        let h2 = document.createElement("h2");
        let button = document.createElement("button");
        section.classList.add(className);

        //giving the text
        button.textContent = "Learn more";
        h2.innerHTML = `${element.level} membership level`;

        section.appendChild(h2);
        section.appendChild(button);
        cardsSection.append(section);

        button.addEventListener("click", () => {

            showStuff(element);

        });


    });
}


function showStuff(element){
    h2.textContent = "";
    ul.innerHTML = ``;
    
    h2.innerHTML = `${element.level} benefits`;
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    li1.textContent = element.benefits[0];
    li2.textContent = element.benefits[1];
    li3.textContent = element.benefits[2];

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    dialogBox.showModal();
}

closeButton.addEventListener("click", () =>{

    dialogBox.close();
})


window.onclick = function(event){
    if(event.target == dialogBox){
        dialogBox.close();
    }
    
}


