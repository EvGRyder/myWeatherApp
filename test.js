const Greet = () => {

  const currentWeather = {
    "coord": {
      "lon": -64.8019,
      "lat": 46.1159
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 295.75,
      "feels_like": 295.42,
      "temp_min": 295.42,
      "temp_max": 296.11,
      "pressure": 1007,
      "humidity": 52
    },
    "visibility": 10000,
    "wind": {
      "speed": 5.14,
      "deg": 260
    },
    "clouds": {
      "all": 75
    },
    "dt": 1630529077,
    "sys": {
      "type": 1,
      "id": 898,
      "country": "CA",
      "sunrise": 1630489214,
      "sunset": 1630537108
    },
    "timezone": -10800,
    "id": 6076211,
    "name": "Moncton",
    "cod": 200
  }

  return { currentWeather }
}

export default Greet

