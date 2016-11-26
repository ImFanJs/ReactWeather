import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=de7c0ab940aa541098b071cc82f00522&units=metric'

export default function getTemp (location) {
  let encodedLocation = encodeURIComponent(location)
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

  return axios.get(requestUrl).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    } else {
      return res.data.main.temp
    }
  }, (err) => {
    throw new Error(err.response.data.message)
  })
}
