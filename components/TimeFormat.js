const formatDay = (day) => {
  day += ''
  const lastNum = day.slice(-1)
  if (lastNum == 1) return `${day}st`
  if (lastNum == 2) return `${day}nd`
  if (lastNum == 3) return `${day}rd`
  else return `${day}th`
}

const formatMonth = (month) => {
  switch(month) {
    case 0: return 'January'; break
    case 1: return 'February'; break
    case 2: return 'March'; break
    case 3: return 'April'; break
    case 4: return 'May'; break
    case 5: return 'June'; break
    case 6: return 'July'; break
    case 7: return 'August'; break
    case 8: return 'September'; break
    case 9: return 'October'; break
    case 10: return 'November'; break
    case 11: return 'December'; break
  }
}

const formatHour = (hours, minutes) => {
  minutes += ""
  if (minutes.length == 1) minutes = "0" + minutes
  if (hours == 0) return `12:${minutes}AM`
  if (hours < 12) return `${hours}:${minutes}AM`
  if (hours == 12) return `${hours}:${minutes}PM`
  else return `${hours - 12}:${minutes}PM`
}

const TimeFormat = () => {
  const timey = new Date()

  const day = timey.getDate()
  const newDay = formatDay(day)

  const month = timey.getMonth()
  const newMonth = formatMonth(month)

  const year = timey.getFullYear()

  const hours = timey.getHours()
  const minutes = timey.getMinutes()
  const newHours = formatHour(hours, minutes) 

  return `${newMonth} ${newDay}, ${newHours}`
}

const DayToName = (day) => {
  switch(day) {
    case 0: return "Sunday"; break
    case 1: return "Monday"; break
    case 2: return "Tuesday"; break
    case 3: return "Wednesday"; break
    case 4: return "Thursday"; break
    case 5: return "Friday"; break
    case 6: return "Saturday"; break
  }
}

const Tomorrow = (day) => {
  day.setDate(day.getDate() + 1)
  return day
}

export { TimeFormat, DayToName, Tomorrow, formatHour }