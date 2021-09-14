const Histogram = document.querySelector('.histogram')

const HandleHourly = () => {

  const histoContainer = document.createElement('div')
  histoContainer.classList.add('histogram-container')

  const histoHeader = document.createElement('header')
  histoContainer.appendChild(histoHeader)
  histoHeader.textContent = "hi"
  
  Histogram.appendChild(histoContainer)
  return histoContainer
}

export default HandleHourly