



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
        figure.innerHTML = `<img src = "${element.image}" alt="${element.name} image" loading="lazy" width="300" height="200">`;
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
        
        
        h2.innerHTML =`${card.name} - used for: ${card.used_for}`;
        p.innerHTML = `${card.description}<br><br>Website: <a href="${card.website}">${card.website}</a>`;
        figure.innerHTML = `<img src = "${card.image}" alt="${card.name} image" loading="lazy" width="300" height="200" >`;
        
        article.classList.add("open");
        article.append(h2,p,figure);

        div.appendChild(article);

        setTimeout(() => {
          displayRandomCard();
          article.classList.remove("open");
          
        }, 5000);
    

}



export function levelModal(data){

    const levelButton = document.querySelector("#levelLearn");

    levelButton.addEventListener("click", () =>{

        const dialogBox = document.querySelector("#dialogBox");
        dialogBox.innerHTML = ``;


        data.forEach(element => {
          const div = document.createElement("div");
          const h2 = document.createElement("h2");
          const ul = document.createElement("ul");
          
          h2.textContent = element.level;
          element.benefits.forEach(benefit => {
            let li = document.createElement("li");
            li.textContent = benefit;
            ul.appendChild(li)
          });
          
          div.append(h2, ul);
          dialogBox.append(div);
          
        });
        const closeButton = document.createElement("button")
        closeButton.textContent = "Close";

          dialogBox.appendChild(closeButton);
          dialogBox.showModal();

          closeButton.addEventListener("click", () =>{
            dialogBox.close()
        })
    })

}








export function showFormResults(cup){
    
  const currentUrl = window.location.href;
  let result = "";  
  const formData = currentUrl.split("?")[1].split("&");
  
  
  
  formData.forEach(element => {

      if(element.startsWith(cup)){
          result = element.split("=")[1].replace("%40", "@");
      }

      
    });
    
    return result
}



export function saveSubscriptionTime(){

  const form = document.querySelector("form");

  form.addEventListener("submit", () =>{

    const subscriptionTime = new Date();

    console.log(subscriptionTime);

    localStorage.setItem("subscriptionTime", subscriptionTime.toISOString());


  })


}


export function calculateMembershipTime(){

  let subscriptionTime = localStorage.getItem("subscriptionTime");

  if(subscriptionTime){
    let now = new Date();

    subscriptionTime = new Date(subscriptionTime);


    const timeDifference = now - subscriptionTime;

    let memberShipTimeInDays = Math.floor(timeDifference / (1000*60*60*24));

    memberShipTimeInDays += 120;
    
    console.log(memberShipTimeInDays);

    // saving it to the footer

    const footerP = document.querySelector("#membershipTime");

    footerP.innerHTML = `Congratulations! You have been a member for ${memberShipTimeInDays} days`;
  }
}