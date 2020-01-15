import React from 'react'

import Layout from '../components/layout'
import StatusEntry from '../components/StatusEntry'
import StatusList from '../components/StatusList'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStatus: {
        title: '',
        privacy: 'public'
      },
      statuses: [
        { title: "Here is the first status", privacy: 'public' },
        { title: "Here is the second status", privacy: 'private' },
        { title: "Here is the third status", privacy: 'public' }
      ]
    }

    this.shareStatus = this.shareStatus.bind(this)
  }

  currentStatusChange = (e, type) => {
    // e.preventDefault()
    let val = e.target.value

    console.log(val)

    if (type === 'title') {
      this.setState(prevState => ({
        ...prevState,
        currentStatus: {
          title: val,
          privacy: this.state.currentStatus.privacy
        }
      }))
    } else if (type === 'privacy') {
      this.setState(prevState => ({
        ...prevState,
        currentStatus: {
          title: this.state.currentStatus.title,
          privacy: val,
        }
      }))
    }
  }
  shareStatus = (e, status) => {
    let statuses = this.state.statuses
    statuses.push(status)
    this.setState(prevState => ({
      ...prevState,
      currentStatus: {
        title: '',
        privacy: this.state.currentStatus.privacy
      },
      statuses: statuses
    }))
  }

  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-start">
          <StatusEntry currentStatus={ this.state.currentStatus } currentStatusChange={ this.currentStatusChange } shareStatus={ this.shareStatus } />
          <StatusList statuses={ this.state.statuses } />
        </div>
      </Layout>
    )
  }
}

export default Home