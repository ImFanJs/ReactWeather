import React from 'react'

export default class WeatherMessage extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    var {temp, location} = this.props
    return (
      <div>
        <h3 className='text-center'>It`s {temp}ºC in {location}!</h3>
      </div>
    )
  }
}
