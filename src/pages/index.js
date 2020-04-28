import React, { useState } from 'react'

import Layout from '../components/layout'
import StatusEntry from '../components/StatusEntry'
import StatusList from '../components/StatusList'

const Home = () => {
  const [statuses, setStatuses] = useState([
    { title: "Here is the first status", privacy: 'public' },
    { title: "Here is the second status", privacy: 'private' },
    { title: "Here is the third status", privacy: 'public' }
  ])

  /**
   * Add new items to the status
   * @param  {Object} newStatus
   */
  const updateStatus = (newStatus) => {
    statuses.push(newStatus)

    // https://github.com/facebook/react/issues/15858
    // `setStatuses(statuses)` won't work as React doesn't think it's changed
    // enough. It doesn't do a deep compare of an array of objects. Solution is
    // to make a new array
    setStatuses(Array.from(statuses))
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start">
        <StatusEntry updateStatus={updateStatus} />
        <StatusList statuses={statuses} />
      </div>
    </Layout>
  )
}

export default Home
