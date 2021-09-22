import WeatherHandler from "../WeatherHandler.js"
import KtoC from "./TempConverstions.js"
import { formatHour } from "./TimeFormat.js"

const WeatherObj = WeatherHandler()


const setHour = (hour, index) => {
  const day = new Date()
  const thisHour = (day.getHours() + index) % 24

  const hourlyCont = document.createElement('div')
  hourlyCont.classList.add('hour-card')

  const hourlyHour = document.createElement('div')
  hourlyHour.classList.add('hourly-hour')
  hourlyCont.appendChild(hourlyHour)

  const hourlyTemp = document.createElement('div')
  hourlyTemp.classList.add('hourly-temp')
  hourlyCont.appendChild(hourlyTemp)
  
  hourlyTemp.textContent = KtoC(hour.temp)

  hourlyHour.textContent = formatHour(thisHour, 0)

  return hourlyCont

}

const Histogram = document.querySelector('.histogram')

const HandleHourly = () => {

  const Hourlys = WeatherObj.getHourly()
  console.log(Hourlys);

  const histoContainer = document.createElement('div')
  histoContainer.classList.add('histogram-container')

  const histoHeader = document.createElement('header')
  histoContainer.appendChild(histoHeader)

  for (let i = 1; i < 13; i++) {
    histoContainer.appendChild(setHour(Hourlys[i], i))
  }

  
  Histogram.appendChild(histoContainer)
  return histoContainer
}

export default HandleHourly