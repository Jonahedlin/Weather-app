 let apiKey ='28cc95c33b26aa1ee6294e8b56647900';
 let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=toronto';

async function checkWeather() {
    var cityName= document.getElementById('searchInput');
   const response = await fetch( apiURL + '&appid=' + '28cc95c33b26aa1ee6294e8b56647900');
   let data = await response.json();

   console.log();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = data.main.temp;
    document.querySelector('#wind').innerHTML = data.wind.speed + ' km/hr';
    document.querySelector('#humidity').innerHTML = data.main.humidity; 
    document.querySelector('#icon').innerHTML = data.weather[0].main;  
}
checkWeather();