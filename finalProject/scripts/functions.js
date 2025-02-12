



// doing the cards


  export async function getData(url){

    try {
            const response = await fetch(url);

            if(response.ok){

                const data = await response.json();


                
                // displayToolCards(data)
                return data;
            }

            else{
                throw Error(response.text());
            }

    } catch (error) {
        
        console.log(error);
    }

  }

 export async function displayToolCards(data){
    
    const div = document.querySelector("#toolCards");

    data.forEach(element => {
      
    

        const article = document.createElement("article")
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const figure = document.createElement("figure");
        const learnButton = document.createElement("button");
        
        h2.innerHTML =`${element.name} - used for: ${element.used_for}`;
        p.innerHTML = `${element.description}<br><br>Website: <a href="${element.website}">${element.website}</a>`;
        figure.innerHTML = `<img src = "${element.image}" alt="${element.name} image" width="300" height="200">`;
        learnButton.textContent = "Learn more";

        article.append(h2,p,figure,learnButton);

        div.appendChild(article);

        
        
        // modal
        const dialogBox = document.querySelector("#dialogBox");
        const dialogh2 = document.querySelector("#dialogBox h2");
        const dialogp = document.querySelector("#dialogBox p");
      
        
      
        
      

        learnButton.addEventListener("click", () =>{

          dialogh2.textContent = element.name;
          dialogp.innerHTML =
        `
        <strong>User Highlight</strong>: ${element.user_highlight}<br>
        <strong>Unique feature</strong>: ${element.unique_feature}<br>
        <strong>Fun fact</strong>: ${element.fun_fact}<br>
        <strong>Price</strong>: ${element.price}
        `;

        dialogBox.showModal()
        });

      });

    
  }






 // generate random number

 function generateRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
 }



// display a random card
const div = document.querySelector("#animatedCard");
let data = await getData("./data/cards.json");

export async function displayRandomCard(){
  
  div.innerHTML = ``;
  
  

    

    let random = generateRandomNumber(0,14);
    
    let card = data[random];
    

        const article = document.createElement("article")
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const figure = document.createElement("figure");
        const learnButton = document.createElement("button");
        
        h2.innerHTML =`${card.name} - used for: ${card.used_for}`;
        p.innerHTML = `${card.description}<br><br>Website: <a href="${card.website}">${card.website}</a>`;
        figure.innerHTML = `<img src = "${card.image}" alt="${card.name} image" width="300" height="200">`;
        learnButton.textContent = "Learn more";
        article.classList.add("open");
        article.append(h2,p,figure,learnButton);

        div.appendChild(article);

        setTimeout(() => {
          displayRandomCard();
          article.classList.remove("open");
          
        }, 5000);
    

}


