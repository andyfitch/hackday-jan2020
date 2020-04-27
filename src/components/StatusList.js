import React, { useState } from 'react'

const StatusList = props => {

  const [showPrivate, setShowPrivate] = useState(false)

  return (
    <>
      <ul className='w-400 flex flex-col items-start border-grey border-px p-30 mt-30'>
        {props.statuses.map(navigationItem => (
          <li className={`${
            navigationItem.privacy === 'private' ? (showPrivate ? `block` : `hidden`) : 'block'
          } border-b-red border-b-px pb-10 mb-10`} key={navigationItem.title}>
            {navigationItem.title}
          </li>
        ))}
      </ul>
      <button type='button' onClick={() => setShowPrivate(!showPrivate)} className='p-10 bg-grey mt-20'>{ showPrivate ? 'Hide' : 'Show' } private items</button>
    </>
  )
}

export default StatusList