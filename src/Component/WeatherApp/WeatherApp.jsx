import React ,{ useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import nightClear_icon from '../Assets/nightClear.png'
import nightCloudy_icon from '../Assets/nightCloudy.png'
import cloud_icon from '../Assets/cloud.png'
import scattered_icon from '../Assets/scattered.png'
import rain_icon from '../Assets/rainy.png'
import snow_icon from '../Assets/snow.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'
import drizzle_icon from '../Assets/drizzle.png'
import mist_icon from '../Assets/mist.png'
import thunder_icon from '../Assets/thunder.png'

const WeatherApp = () => {
  let api_key="ba2bfc92637eba5e4d19eb5203fcff4e";
  const [wicon,setWicon]=useState(cloud_icon)
  const search= async() => {
      const element = document.getElementsByClassName("cityInput")
      if (element[0].value === "") {
        return 0
      }
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=Metric`;
      let response= await fetch(url);
      let data=await response.json();
      const humidity = document.getElementsByClassName("humidity-percent")
      const wind = document.getElementsByClassName("wind-rate")
      const temperature = document.getElementsByClassName("weather-temp")
      const location = document.getElementsByClassName("weather-location")
      const weather = document.getElementsByClassName("weather-text")
      const feelsLike = document.getElementsByClassName("feelsLike")
     
      humidity[0].innerHTML=data.main.humidity+" %";
      wind[0].innerHTML=Math.floor(data.wind.speed*(18/5))+" Km/h";
      temperature[0].innerHTML=Math.floor(data.main.temp)+"°c";
      location[0].innerHTML=data.name;
      weather[0].innerHTML=data.weather[0].description;
      feelsLike[0].innerHTML="feels like "+Math.floor(data.main.feels_like)+"°c";
      

      if(data.weather[0].icon==="01d"){
        setWicon(clear_icon);
      }else if(data.weather[0].icon==="01n"){
        setWicon(nightClear_icon);
      }else if(data.weather[0].icon==="02d"){
        setWicon(cloud_icon);
      }else if(data.weather[0].icon==="02n"){
        setWicon(nightCloudy_icon);
      }else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
        setWicon(scattered_icon);
      }else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
        setWicon(scattered_icon);
      }else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
        setWicon(drizzle_icon);
      }else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
        setWicon(rain_icon);
      }else if(data.weather[0].icon==="11d"||data.weather[0].icon==="11n"){
        setWicon(thunder_icon);
      }else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
        setWicon(snow_icon);
      }else{
        setWicon(mist_icon);
      }





    }

  
  return (
    <div>
      <div className="container">
        <div className="top-bar">
            <input type="text" placeholder="Search" className="cityInput"/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-text">Haze</div>
      
      <div className="weather-temp">24°c</div>
      <div className='feelsLike'>feels like  25°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
               <div className="humidity-percent">64%</div>
               <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
               <div className="wind-rate">3 Km/h</div>
               <div className="text">Wind</div>
            </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}


export default WeatherApp
