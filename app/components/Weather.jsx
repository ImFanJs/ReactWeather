import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import getTemp from 'OpenWeatherMap'

export default class Weather extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  handleSearch (location) {
    this.setState({isLoading: true})
    getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, (errorMessage) => {
      this.setState({
        isLoading: true
      })
      alert(errorMessage)
    })
  }
  render () {
    var {isLoading, temp, location} = this.state
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    return (
      <div className='col-md-4 col-md-offset-4 text-center'>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    )
  }
}
