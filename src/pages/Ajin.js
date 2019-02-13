import React, { Component } from 'react'

class Ajin extends Component {
  constructor() {
    super()
    this.state = {
      Firstname: 'Fadhila',
      LastName: 'Fajrin'
    }
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.Firstname} {this.state.LastName}
        </h1>
        <p>i'm tired.</p>
      </div>
    )
  }
}

export default Ajin
