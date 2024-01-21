//global variables
const apiKey = '&appid=4306ead45b0da8071ae1bb6d19e61e3e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
let searchBox = document.getElementById("name");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon")




async function checkWeather(city){

    const response = await fetch(apiUrl+city+apiKey ); 
    let data = await response.json();
//query selectors to display weather data to the card
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp" ).innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
    
//changes the icon for the weather to match info from api
    if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

//pops up the weather info on the card when a city is searched
    document.querySelector('.weather').style.display = 'block';
};

//when the search button is clicked, the city will be searched in the api and the checkWeather function will run
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
});

