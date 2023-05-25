const apikey = "86324cfb2bld357e6093da4df19a4b";
const apiurl = "https://api.openthermap.org/data/2.5/weather? units=metric&q=bangalore";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiurl +  city + '&appid=${apikey');
    var data = await response.json();

    console.log (data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "clouds"){
    weatherIcon.src = "images/clouds.png";

    } 

  else if(data.weather[0].main == "clears"){
  weatherIcon.src = "images/clear.png";
    }

else if(data.weather[0].amin == "Rain"){
    weatherIcon.src = "images/rain.png";
     }

else if(data.weather[0].amin == "Drizzle"){
    weatherIcon.sec = "images/drizzle.png"
     }

     else if(data.weather[0].amin == "Mist"){
        weatherIcon.sec = "images/mist.png"
      }
    


}

searchBtn.addEventListener("cilck", ()=>{
    checkWeather(searchBox.value);
})


