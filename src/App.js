import React, { useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

// Create an object containing the API key and base URL for the OpenWeatherMap API
const api = {
  key: API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
// Declare state variables for query and weather
  const [query , setQuery] = useState('');
  const [weather , setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      // Create a function that runs when the user hits the Enter key while typing in the search box
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json()) // Parse the response as JSON
        .then(result => {
          // Update the weather state variable with the retrieved data
          setWeather(result);
          // Clear the search box by updating the query state variable
          setQuery('');
          console.log(result)
        })
    }
  }

// Create a function that formats the current date and returns it as a string
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

 // Render the search box and weather information
  return (
    <div className={
      (typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app'): 'app'}>
      <main>
        <div className='search-box'>
          <input
             type="text"
             className="search-bar"
             placeholder='Search...'
             onChange={e => setQuery(e.target.value)}
             value={query}
             onKeyPress={search}>
          </input>
        </div>
        {(typeof weather.main !="undefined") ?(
        <div>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°c
            </div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>  
        </div>
        ) : ('')}
      </main>
    </div>
  )
}
// Export the App component as the default export of this module
export default App
