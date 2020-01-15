import React from 'react'

import Layout from '../components/layout'
import StatusEntry from '../components/StatusEntry'
import StatusList from '../components/StatusList'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = { newStatus: null }
    this.shareStatus = this.shareStatus.bind(this)
  }

  shareStatus(event, status) {
    console.log(status)
    this.setState({ newStatus: status })
  }

  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-start">
          <StatusEntry shareStatus={ this.shareStatus } />
          <StatusList newStatus={ this.state.newStatus } />
        </div>
      </Layout>
    )
  }
}

export default Home