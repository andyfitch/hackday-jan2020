import React from 'react'

const StatusEntry = (props) => {
  return (
    <div className="w-400 flex flex-col border-grey border-px p-30 mt-30">
      <div className="mb-10">
        <input type="text" placeholder="Enter a status..." value={ props.currentStatusTitle } className="p-10 border-px border-grey mr-10" onChange={ (event) => props.currentStatusTitleChange(event) } />
        <button type="submit" className="p-10 bg-grey" onClick={ (event) => props.shareStatus(event, props.currentStatusTitle, props.currentStatusPrivacy) }>Share</button>
      </div>
      <div className="flex">
        <label htmlFor="rdbPrivacyPublic" className="mr-10"><input type="radio" id="rdbPrivacyPublic" name="privacy" value="public" onChange={ (event) => props.currentStatusPrivacyChange(event) } checked={ props.currentStatusPrivacy === 'public' } /> Public</label>
        <label htmlFor="rdbPrivacyPrivate"><input type="radio" id="rdbPrivacyPrivate" name="privacy" value="private" onChange={ (event) => props.currentStatusPrivacyChange(event) } checked={ props.currentStatusPrivacy === 'private' } /> Private</label>
      </div>
    </div>
  )
}

export default StatusEntry