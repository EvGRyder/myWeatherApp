import apiKey from "../_tokens.js"

const getCoords = async (city) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},CA&limit=3&appid=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()
  const { lat, lon } = data[0]

  return {lat, lon}
}

const getOneCall = async (city) => {
  const {lat, lon} = await getCoords(city)
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()

  return {city, data}
}


export default getOneCall