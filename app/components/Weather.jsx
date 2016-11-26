import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import ErrorModal from 'ErrorModal'
import getTemp from 'OpenWeatherMap'

export default class Weather extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  handleSearch (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    })
    getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, (e) => {
      this.setState({
        isLoading: true,
        errorMessage: e.message
      })
    })
  }
  render () {
    var {isLoading, temp, location, errorMessage} = this.state
    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    function renderError () {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>
      }
    }
    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}
