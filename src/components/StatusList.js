import React, { useState } from 'react'

class StatusList extends React.Component {

  // const [showPrivate, togglePrivate] = useState(true)

  constructor(props) {
    super(props)

    this.state = {
      showPrivate: true,
      statuses: [
        { title: "Here is the first status", private: false },
        { title: "Here is the second status", private: true },
        { title: "Here is the third status", private: false }
      ]
    }
  }

  render() {
    return (
      <>
        <ul className="w-400 flex flex-col items-start border-grey border-px p-30 mt-30">
          {this.state.statuses.map(navigationItem => (
            <li className={`${
              navigationItem.private ? (this.state.showPrivate ? `block` : `hidden`) : 'block'
            } border-b-red border-b-px pb-10 mb-10`} key={navigationItem.title}>
              {navigationItem.title}
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => this.setState({ showPrivate: !this.state.showPrivate })} className="p-10 bg-grey mt-20">{ this.state.showPrivate ? 'Show' : 'Hide' } private items</button>
      </>
    )
  }
}

export default StatusList
