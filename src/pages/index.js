import React from 'react'

import Layout from '../components/layout'
import StatusEntry from '../components/StatusEntry'
import StatusList from '../components/StatusList'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      defaultPrivacyPublic: true,
      statuses: [
        { title: "Here is the first status", private: false },
        { title: "Here is the second status", private: true },
        { title: "Here is the third status", private: false }
      ]
    }

    this.shareStatus = this.shareStatus.bind(this)
  }

  shareStatus(event, status) {
    let statuses = this.state.statuses
    statuses.push(status)
    this.setState({ statuses: statuses })
  }

  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-start">
          <StatusEntry defaultPrivacyPublic={ this.state.defaultPrivacyPublic } shareStatus={ this.shareStatus } />
          <StatusList statuses={ this.state.statuses } />
        </div>
      </Layout>
    )
  }
}

export default Home