import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
  }
  onSearch (e) {
    e.preventDefault()

    var location = this.refs.search.value
    var encodedLocation = encodeURIComponent(location)
    if (location.length > 0) {
      this.refs.search.value = ''
      window.location.hash = '#/?location=' + encodedLocation
    }
  }
  render () {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>Jesco Weather</li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className='menu'>
              <li>
                <input type='search' placeholder='Search weather by city' ref='search' />
              </li>
              <li>
                <button type='submit' className='button'>Get weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}
