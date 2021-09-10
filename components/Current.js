import WeatherHandler from "../WeatherHandler.js";
import {TimeFormat} from "./TimeFormat.js";

const WeatherObj = WeatherHandler()

const CurrentWeather = WeatherObj.getCurrent()
const City = WeatherObj.getName()

const currentTime = document.querySelector('.current-time')
const currentPlace = document.querySelector('.current-place')
const cityTemp = document.querySelector('.city-temp')
const cloudIcon = document.querySelector('.cloud-icon')
const cloudDesc = document.querySelector('.cloud-desc')

const HandleCurrent = () => {
  currentPlace.textContent = City
  currentTime.textContent = TimeFormat()
  cityTemp.textContent = KtoC(CurrentWeather.temp)
  cloudIcon.src = setCloud(CurrentWeather.weather[0].main)
  cloudDesc.textContent = CurrentWeather.weather[0].description
}


export default HandleCurrent

const KtoC = (kelvin) => `${Math.ceil(kelvin - 273.15)}\u00B0C`

const setCloud = (desc) => {
  switch(desc) {
    case 'Clouds': return './components/img/clouds.png'; break
  }
}