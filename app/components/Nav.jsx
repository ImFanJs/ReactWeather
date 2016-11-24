import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Nav extends React.Component {
  onSearch (e) {
    e.preventDefault()

    alert('TO-DO')
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
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li>
                <input type='search' placeholder='Search weather' />
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
