import React, { useState } from 'react'

const StatusEntry = props => {
  const [title, setTitle] = useState('')
  const [privacy, setPrivacy] = useState('public')

  /**
   * Update the title
   * @param  {Object} event
   */
  const titleChange = (event) => {
    setTitle(event.target.value)
  }

  /**
   * Update the privacy
   * @param  {Object} event
   */
  const privacyChange = (event) => {
    setPrivacy(event.target.value)
  }

  /**
   * Pass the current title and privacy to a prop, then reset the title
   */
  const shareCurrentStatus = () => {
    props.updateStatus({ title, privacy })
    setTitle('')
  }

  return (
    <div className="w-400 flex flex-col border-grey border-px p-30 mt-30">
      <div className="mb-10">
        <input
          type="text"
          placeholder="Enter a status..."
          value={title}
          className="p-10 border-px border-grey mr-10"
          onChange={titleChange}
        />
        <button
          type="submit"
          className="p-10 bg-grey"
          onClick={shareCurrentStatus}
        >
          Share
        </button>
      </div>
      <div className="flex">
        <label
          htmlFor="rdbPrivacyPublic"
          className="mr-10"
        >
          <input
            type="radio"
            id="rdbPrivacyPublic"
            name="privacy"
            value="public"
            onChange={privacyChange}
            checked={privacy === 'public'}
          />
          {' Public'}
        </label>
        <label
          htmlFor="rdbPrivacyPrivate"
        >
          <input
            type="radio"
            id="rdbPrivacyPrivate"
            name="privacy"
            value="private"
            onChange={privacyChange}
            checked={privacy === 'private'}
          />
          {' Private'}
        </label>
      </div>
    </div>
  )
}

export default StatusEntry
