import React from 'react'

export default class Movie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isOpen: false}
    this.toggleSummary = this.toggleSummary.bind(this)
  }

  toggleSummary () {
    this.setState({isOpen: !this.state.isOpen})
  }

  render () {
    const {display_title, summary_short} = this.props
    return (
      <li>
        <div onClick={this.toggleSummary} className="movieTitle">{display_title}</div>
        <div style={{ visibility: this.state.isOpen ? 'visible' : 'hidden' }} className="summary">{summary_short}</div>
      </li>
    )
  }
}
