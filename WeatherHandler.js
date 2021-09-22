import WeatherTestObj from "./WeatherHandlerData.js"
import getOneCall from "./components/FetchWeather.js"

// const {city, data} = await getOneCall('Halifax')


const {city, data} = WeatherTestObj()


const WeatherHandler = () => {
  const getName = () => {return city}
  const getCurrent = () => {return data.current}
  const getDaily = () => {return data.daily}
  const getHourly = () => {return data.hourly}
  const getMinutely = () => {return data.minutely}

  return { getName, getCurrent, getDaily, getHourly, getMinutely}
}

export default WeatherHandler