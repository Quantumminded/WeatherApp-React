import React, { useState } from 'react'
import './App.css'

function App() {

  const apiKey = '6cbae67f2f27d83ccede5cf2d7de4f00'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = ("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`)
      .then(
        response => response.json()
        ).then(
          data => {
            setWeatherData(data)
            setCity("")
            console.log(setWeatherData(data))
          }
        )
    }
  }
  
  return (
    <div className='container'>
      <input 
      className='input' 
      placeholder='Enter City....'
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
       />

       {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to weather App</p>
        </div>
       ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}F</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
       )}
    </div>
  )
}

export default App
