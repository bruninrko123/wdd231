// last modification

const lastModifiedParagraph = document.querySelector("#lastModified");

const lastModified = document.lastModified;

lastModifiedParagraph.innerHTML = `Last modified in ${lastModified}`;



//copyright

const copyright = document.querySelector("#copyright");

const currentYear = new Date().getFullYear();


copyright.innerHTML = `©${currentYear} Bruno dos Santos Alves`;





// hamburguer button

const hamburguer = document.querySelector("#hamburguer");

const nav = document.querySelector("#animateMe");

hamburguer.addEventListener("click", () =>{

    hamburguer.classList.toggle("show");

    nav.classList.toggle("show");

})





