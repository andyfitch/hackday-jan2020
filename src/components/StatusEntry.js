import React from 'react'

class StatusEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentStatus: {
        title: this.props.currentStatus.title,
        privacy: this.props.currentStatus.privacy
      }
    }

    console.log(this.props.currentStatus)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentStatus.privacy !== this.props.currentStatus.privacy) {
      this.state.currentStatus.privacy = this.props.currentStatus.privacy
      this.forceUpdate()
    }
  }

  render() {
    return (
      <div className="w-400 flex flex-col border-grey border-px p-30 mt-30">
        <div className="mb-10">
          <input type="text" placeholder="Enter a status..." value={ this.props.currentStatus.title } className="p-10 border-px border-grey mr-10" onChange={ (event) => this.props.currentStatusChange(event, 'title') } />
          <button type="submit" className="p-10 bg-grey" onClick={ (event) => this.props.shareStatus(event, this.props.currentStatus) }>Share</button>
        </div>
        <div className="flex">
          <label htmlFor="rdbPrivacyPublic" className="mr-10"><input type="radio" id="rdbPrivacyPublic" name="privacy" value="public" onChange={ (event) => this.props.currentStatusChange(event, 'privacy') } checked={ this.state.currentStatus.privacy === 'public' } /> Public</label>
          <label htmlFor="rdbPrivacyPrivate"><input type="radio" id="rdbPrivacyPrivate" name="privacy" value="private" onChange={ (event) => this.props.currentStatusChange(event, 'privacy') } checked={ this.state.currentStatus.privacy === 'private' } /> Private</label>
        </div>
      </div>
    )
  }
}

export default StatusEntry
