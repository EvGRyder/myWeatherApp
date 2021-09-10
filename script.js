import HandleCurrent from "./components/Current.js"
import HandleDaily from "./components/Daily.js"
// import getOneCall from "./components/FetchWeather.js"

const citySearcher = document.querySelector('.city-search')
citySearcher.addEventListener('click', () => FullDisplay())
const citySearched = document.querySelector('.city-input')

const FullDisplay = () => {
  HandleCurrent()
  HandleDaily()
}

FullDisplay();
