import React, { useState } from 'react'

class StatusList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showPrivate: false
    }
  }

  render() {
    return (
      <>
        <ul className="w-400 flex flex-col items-start border-grey border-px p-30 mt-30">
          {this.props.statuses.map(navigationItem => (
            <li className={`${
              navigationItem.private ? (this.state.showPrivate ? `block` : `hidden`) : 'block'
            } border-b-red border-b-px pb-10 mb-10`} key={navigationItem.title}>
              {navigationItem.title}
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => this.setState({ showPrivate: !this.state.showPrivate })} className="p-10 bg-grey mt-20">{ this.state.showPrivate ? 'Hide' : 'Show' } private items</button>
      </>
    )
  }
}

export default StatusList
