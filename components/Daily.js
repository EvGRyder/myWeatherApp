import WeatherHandler from "../WeatherHandler.js"
import { DayToName, Tomorrow } from "./TimeFormat.js"
import KtoC from "./TempConverstions.js"

const WeatherObj = WeatherHandler()
const DailyWeather = WeatherObj.getDaily()

const ForecastBar = document.querySelector('.daily-forecast-bar')
console.log(DailyWeather[0]);


const dailyCardOG = (day, date) => {
  const container = document.createElement('div')
  container.classList.add('day-card')

  const theDay = document.createElement('header')
  theDay.textContent = DayToName(date.getDay())

  const theWeather = document.createElement('div')
  theWeather.classList.add('daily-weather')

  const tempContainer = document.createElement('div')
    const highTemp = document.createElement('div')
    highTemp.classList.add('high-temp')
    highTemp.textContent = `High ${KtoC(day.temp.max)}`
    tempContainer.appendChild(highTemp)

    const theTemp = document.createElement('div')
    theTemp.classList.add('the-temp')
    tempContainer.appendChild(theTemp)

    const lowTemp = document.createElement('div')
    tempContainer.appendChild(lowTemp)
    lowTemp.classList.add('low-temp')
    lowTemp.textContent = `${KtoC(day.temp.min)} Low`


  theTemp.textContent = KtoC(day.temp.day)

  const weatherIcon = document.createElement('img')
  weatherIcon.src = setCloud(day.weather[0].main)
  weatherIcon.alt = day.weather[0].main

  theTemp.appendChild(weatherIcon)  
  theWeather.appendChild(tempContainer)  

  container.appendChild(theDay)
  container.appendChild(theWeather)


  
  ForecastBar.appendChild(container)
  return container
}

const dailyCard = () => {
  let today = new Date()
  for (let i = 1; i < 8; i++) {
    dailyCardOG(DailyWeather[i], today)
    Tomorrow(today)
  }
}



export default dailyCard

const setCloud = (desc) => {
  switch(desc) {
    case 'Clouds': return './components/img/clouds.png'; break
    case 'Clear': return './components/img/clear.png'; break
    case 'Rain': return './components/img/rain.png'; break
  }
}

/*
{
  "dt": 1630944000,
  "sunrise": 1630921588,
  "sunset": 1630968534,
  "moonrise": 1630918380,
  "moonset": 1630969620,
  "moon_phase": 0,
  "temp": {
    "day": 289.77,
    "min": 284.89,
    "max": 291.66,
    "night": 291.17,
    "eve": 291.48,
    "morn": 286.55
  },
  "feels_like": {
    "day": 290.02,
    "night": 291.53,
    "eve": 291.85,
    "morn": 286.45
  },
  "pressure": 1008,
  "humidity": 97,
  "dew_point": 289.03,
  "wind_speed": 4.4,
  "wind_deg": 207,
  "wind_gust": 11.92,
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "clouds": 100,
  "pop": 1,
  "rain": 9.86,
  "uvi": 0.67
}
*/

