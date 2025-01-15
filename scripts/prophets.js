
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector("#cards");


async function getProphetData(source) {
    
    const response = await fetch(source)

    if (response.ok){

        const data = await response.json();

        console.table(data.prophets)
        displayProphets(data.prophets);
    }
}

function displayProphets(prophets) {

    prophets.forEach(prophet => {

        const card = document.createElement("section");

        const fullName = document.createElement("h2");

        const portrait = document.createElement("img");

        const paragraph = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname} picture`);
        portrait.setAttribute("height", "200");
        portrait.setAttribute("width", "150");

        paragraph.innerHTML = `Date of birth: ${prophet.birthdate}<br>Place of birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(paragraph);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
}

getProphetData(url);