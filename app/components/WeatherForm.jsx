import React from 'react'

export default class WeatherForm extends React.Component {
  constructor (props) {
    super(props)
  }
  onFormSubmit (e) {
    e.preventDefault()

    var location = this.refs.location.value
    var der = document.getElementsByClassName('message')
    if (location.length > 2) {
      this.refs.location.value = ''
      this.props.onSearch(location)
      der[0].innerHTML = ''
    } else {
      der[0].innerHTML = 'Debes introducir una ciudad valida!'
    }
  }

  render () {
    return (
      <div className='medium-6'>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type='text' ref='location' placeholder='Enter city name' className='form-control'/><br/>
          <button className='button hollow'>Get Weather</button>
        </form>
      </div>
    )
  }
}
