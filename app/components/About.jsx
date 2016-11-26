import React from 'react'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h1 className='page-title'>About</h1>
        <p>This is a weather application build on React.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href='https://www.facebook.github.io/react'>React</a> - This was the Javascript Library used.
          </li>
          <li>
            <a href='http://openweathermap.org'>Open Weather Map</a> - I used Open Weather Map API to search for weather data by city name.
          </li>
        </ul>
      </div>
    )
  }
}
