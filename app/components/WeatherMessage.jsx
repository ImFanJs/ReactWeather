import React from 'react'

export default class WeatherMessage extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    var {temp, location} = this.props
    return (
      <div>
        <h2 className='text-center'>It`s it {temp}ºC in {location}!</h2>
        <p className='message text-center'></p>
      </div>
    )
  }
}
