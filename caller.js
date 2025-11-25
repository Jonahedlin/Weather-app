 let apiKey ='28cc95c33b26aa1ee6294e8b56647900';
 let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

 var cityName= document.getElementById('searchInput');
async function checkWeather() {
   const cityInput = document.getElementById('searchInput'); // get element at call time
   let q;
    if (cityInput) {
        q = cityInput.value.trim();
    } else {
        q = '';
    }
   if (!q) {
     alert('Please enter a city name');
     return;
   }

   const response = await fetch(apiURL + '&q=' + encodeURIComponent(q) + '&appid=' + apiKey);
   if (!response.ok) {
     console.error('API error', response.status);
     return;
   }
   let data = await response.json();

   selector = data.weather[0].main;
   let iconSelect = document.querySelector('.icon');
   

   if(selector === "Clouds"){
    iconSelect.innerHTML = "<img src='clouds.png' alt='clouds' id='clouds'>";
   }
   else if(selector === "Cloudy"){
    iconSelect.innerHTML = "<img src='cloudy.png' alt='cloudy' id='cloudy'>";
   }
   else if(selector === "Sun"){
    iconSelect.innerHTML = "<img src='sunny.png' alt='sunny' id='sunny'>";
   }
   else if(selector === "Rain"){
    iconSelect.innerHTML = "<img src='heavy-rain.png' alt='rainy' id='rainy'>";
   }
   else if(selector === "Snow"){
    iconSelect.innerHTML = "<img src='snow.png' alt='snowy' id='snowy'>";
   }
   else{
    iconSelect.innerHTML ="";
   }

   document.querySelector('.cityText').innerHTML = data.name ;
   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
   document.querySelector('#windCall').innerHTML = data.wind.speed + ' m/s';
   document.querySelector('#humidityCall').innerHTML = Math.round(data.main.humidity) + ' %';   
}
//checkWeather();
