import React from 'react'

class StatusEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      defaultPrivacy: this.props.defaultPrivacy,
      status: {
        title: null,
        private: false
      }
    }

    // binds
    this.statusInputValueChange = this.statusInputValueChange.bind(this)
    this.setPublic = this.setPublic.bind(this)
    this.setPrivate = this.setPrivate.bind(this)
  }

  statusInputValueChange(e) {
    let val = e.target.value
    this.setState(prevState => ({
      status: {
        ...prevState.status,
        title: val
      }
    }))
  }
  setPublic(e) {
    let val = e.target.value
    this.setState({ defaultPrivacy: 'public' })
    this.setState(prevState => ({
      status: {
        ...prevState.status,
        private: val == 'on' ? false : null
      }
    }))
  }
  setPrivate(e) {
    let val = e.target.value
    this.setState({ defaultPrivacy: 'private' })
    this.setState(prevState => ({
      status: {
        ...prevState.status,
        private: val == 'on' ? true : null
      }
    }))
  }

  render() {
    return (
      <div className="w-400 flex flex-col border-grey border-px p-30 mt-30">
        <div className="mb-10">
          <input type="text" placeholder="Enter a status..." className="p-10 border-px border-grey mr-10" onChange={ this.statusInputValueChange } />
          <button type="submit" className="p-10 bg-grey" onClick={ (event) => this.props.shareStatus(event, this.state.status) }>Share</button>
        </div>
        <div className="flex">
          <label htmlFor="rdbPrivacyPublic" className="mr-10"><input type="radio" id="rdbPrivacyPublic" name="privacy" onChange={ this.setPublic } checked={ this.state.defaultPrivacy == 'public' } /> Public</label>
          <label htmlFor="rdbPrivacyPrivate"><input type="radio" id="rdbPrivacyPrivate" name="privacy" onChange={ this.setPrivate } checked={ this.state.defaultPrivacy == 'private' } /> Private</label>
        </div>
      </div>
    )
  }
}

export default StatusEntry
