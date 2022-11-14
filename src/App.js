import React, { useState } from 'react'


function App() {

  const api = {
    key: "6cbae67f2f27d83ccede5cf2d7de4f00",
    base: "http://api.openweathermap.org/data/2.5/"
  }
  

  
  
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input
             type="text"
             className="search-bar"
             placeholder='Search...'>
          </input>
        </div>
      </main>
    </div>
  )
}

export default App
