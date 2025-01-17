

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








// displaying the companies cards


async function getMembersData(source){

    const response = await fetch(source);

    if (response.ok){

        const data = await response.json();

        console.table(data);

        displayMemberCards(data);
    }

}


const url = 'data/members.json';

getMembersData(url);




function cardTemplate(member){

    return`
    <section class = "memberCard">
    <div class = cardUpper><h2>${member.name}</h2><br><p>${member.tagline}</p></div>
    <section class= imageSection>
    <div> <img src="images/${member.image}" width="80" height="auto"></div>
    <div class = cardBottom><strong>EMAIL</strong>: ${member.email}<br><strong>PHONE</strong>: ${member.phone}<br><strong>URL</strong>:${member.website}</div></section></section>`
 }

 function displayMemberCards(members){

    
    const HTML = members.map(cardTemplate);

    const membersDiv = document.querySelector(".companyCards");

    membersDiv.innerHTML = HTML.join("");


       


        
    

 };







 // doing the copyright

 const copyright = document.querySelector("#copyright");

 const currentYear = new Date().getFullYear();

copyright.innerHTML = `©${currentYear} RJ Chamber of Commerce`;

 
 