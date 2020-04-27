import React, { useState } from 'react'

import Layout from '../components/layout'
import StatusEntry from '../components/StatusEntry'
import StatusList from '../components/StatusList'

const Home = () => {

  const [currentStatusTitle, setCurrentStatusTitle] = useState('')
  const [currentStatusPrivacy, setCurrentStatusPrivacy] = useState('public')

  const [statuses, setStatuses] = useState([
    { title: "Here is the first status", privacy: 'public' },
    { title: "Here is the second status", privacy: 'private' },
    { title: "Here is the third status", privacy: 'public' }
  ])

  const currentStatusTitleChange = (e, type) => {
    setCurrentStatusTitle(e.target.value)
  }
  
  const currentStatusPrivacyChange = (e, type) => {
    setCurrentStatusPrivacy(e.target.value)
  }
  
  const shareStatus = (e, statusTitle, statusPrivacy) => {
    let _statuses = statuses
    _statuses.push({
      title: statusTitle, 
      privacy: statusPrivacy
    })
    setStatuses(_statuses)
    setCurrentStatusTitle('')
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start">
        <StatusEntry currentStatusTitle={ currentStatusTitle } currentStatusPrivacy={ currentStatusPrivacy } currentStatusTitleChange={ currentStatusTitleChange } currentStatusPrivacyChange={ currentStatusPrivacyChange } shareStatus={ shareStatus } />
        <StatusList statuses={ statuses } />
      </div>
    </Layout>
  )
}

export default Home