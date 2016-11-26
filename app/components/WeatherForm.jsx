import React from 'react'

export default class WeatherForm extends React.Component {
  constructor (props) {
    super(props)
  }
  onFormSubmit (e) {
    e.preventDefault()

    var location = this.refs.location.value
    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type='search' ref='location' placeholder='Enter city name'/><br/>
          <button className='button expanded hollow'>Get Weather</button>
        </form>
      </div>
    )
  }
}
