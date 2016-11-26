import React from 'react'

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
    let modal = new Foundation.Reveal($('#modal-error'))
    modal.open()
  }
  render () {
    var {title, message} = this.props
    return (
      <div id='modal-error' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className='button hollow' data-close=''>Okay</button>
      </div>
    )
  }
}
