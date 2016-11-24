import React from 'react'
import {Link} from 'react-router'

export default class Examples extends React.Component {
  render () {
    return (
      <div>
        <h1>Examples</h1>
        <p>Here are few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Mexico'>Mexico City, MX</Link>
          </li>
          <li>
            <Link to='/?location=Monterrey'>Monterrey, MX</Link>
          </li>
        </ol>
      </div>
    )
  }
}
