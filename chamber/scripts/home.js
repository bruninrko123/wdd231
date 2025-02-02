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









//doing the weather thing

const weatherInfo = document.querySelector("#weatherData");


const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=-22.90&lon=-43.19&appid=e9bd977bf5065cd7aca3bda0158f1508";


async function apiFetch() {

    try {  

        const response = await fetch(url);

        if(response.ok){

            const data = await response.json();

            

            displayResults(data);
        }
        
        else{
            throw Error(response.text());
        }
        
    } catch (error) {

        console.log(error);
        
    }
    
}


apiFetch();


function displayResults(data){

    weatherInfo.innerHTML = `<strong>${data.main.temp}&deg;F</strong><br>${data.weather[0].description}<br>High: ${data.main.temp_max}&deg;F<br>Low: ${data.main.temp_min}&deg;F<br>Humidity: ${data.main.humidity}%<br>Sunrise: ${data.sys.sunrise.toLocaltimeString()}<br>Sunset: ${data.sys.sunset.toLocaltimeString()}`;
}   




// weather forecast


const weatherForecast = document.querySelector("#weatherForecastData");


const ForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=-22.90&lon=-43.19&appid=e9bd977bf5065cd7aca3bda0158f1508";


async function ForecastFetch(){

    try {

        const ForecastResponse = await fetch(ForecastUrl);

        if(ForecastResponse.ok){

            const ForecastData = await ForecastResponse.json();

            

            displayForecast(ForecastData);
        }
        else{
            throw Error(ForecastResponse.text());
        }
        
    } catch (error) {
        
        console.log(error);
    }
}

ForecastFetch();



function displayForecast(ForecastData){


    const tomorrowDate = new Date(ForecastData.list[7].dt_txt);
    const dayAferTomorrowDate = new Date(ForecastData.list[15].dt_txt);
    const dayFormat = {weekday: 'long'};
    weatherForecast.innerHTML = `Today :${ForecastData.list[0].main.temp}&deg;F<br>${tomorrowDate.toLocaleDateString(undefined, dayFormat)}: ${ForecastData.list[7].main.temp}&deg;F<br>${dayAferTomorrowDate.toLocaleDateString(undefined, dayFormat)}: ${ForecastData.list[15].main.temp}&deg;F`;
}





// doing the random cards


async function getMembersData(source){

    const response = await fetch(source);

    if (response.ok){

        const data = await response.json();

        

        const spotlightMembers = data.filter(member => member.membershipLevel < 3);
        
        let arrayCounter = []; 
        let randomMembers = [];
        for(i=0; i<3; i++){

        
        let randomNumber = getRandomInt(0,spotlightMembers.length - 1);
        
            if(!arrayCounter.includes(randomNumber)){
                randomMembers.push(spotlightMembers[randomNumber]);
            
                arrayCounter.push(randomNumber);
            }
            else{
                i--;
            }
        
    
        }

        

        displayMemberCards(randomMembers);
    }

}


const Membersurl = 'data/members.json';

getMembersData(Membersurl);


function getRandomInt(min, max){
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function cardTemplate(member){

    return`
    <section class = "memberCard">
    <div class = cardUpper><h2>${member.name}</h2><br><p>${member.tagline}</p></div>
    <section class= imageSection>
    <div> <img src="images/${member.image}" width="80" height="auto" alt ="${member.tagline} logo"></div>
    <div class = cardBottom><strong>EMAIL</strong>: ${member.email}<br><strong>PHONE</strong>: ${member.phone}<br><strong>URL</strong>:${member.website}</div></section></section>`
 }



 function displayMemberCards(members){

    
    const HTML = members.map(cardTemplate);

    const membersDiv = document.querySelector(".companyCards");

    membersDiv.innerHTML = HTML.join("");


       


        
    

 };



 



 