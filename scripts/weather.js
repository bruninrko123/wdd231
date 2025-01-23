
const currentTemp = document.querySelector("#current-temp");


const weatherIcon = document.querySelector("#weather-icon");


const captionDesc = document.querySelector("figcaption");


const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=49.75&lon=6.64&appid=e9bd977bf5065cd7aca3bda0158f1508";



async function apiFetch() {

    
    try{
        const response = await fetch(url);
        
        if(response.ok){

        
            const data = await response.json()

            

            displayResults(data);
        } else{
            throw Error(await response.text());
        }

} catch(error){
    console.log(error);
}

}

apiFetch()





function displayResults(data){

 

    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = "Weather Icon";


    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    captionDesc.innerHTML = `${data.weather[0].description}`;


}



