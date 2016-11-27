import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

export default class ErrorModal extends React.Component {
  constructor (props) {
    super(props)
  }
  defaultProps () {
    return {
      title: 'Error'
    }
  }
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  }
  componentDidMount () {
    var {title, message} = this.props
    var modalMarkup = (
      <div id='modal-error' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className='button hollow' data-close=''>Okay</button>
      </div>
    )

    var $modal = $(ReactDOMServer.renderToString(modalMarkup))
    $(ReactDOM.findDOMNode(this)).html($modal)

    let modal = new Foundation.Reveal($('#modal-error'))
    modal.open()
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}
