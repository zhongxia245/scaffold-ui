import React, { Component } from 'react'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState({ count: ++this.state.count })
  }

  handleSub = () => {
    this.setState({ count: --this.state.count })
  }

  render() {
    const { count } = this.state
    return (
      <div className="lcgc__demo">
        <p style={styles.uCenter}>{count}</p>
        <button style={styles.uCenter} onClick={this.handleAdd}>
          +
        </button>
        <button style={styles.uCenter} onClick={this.handleSub}>
          -
        </button>
      </div>
    )
  }
}

const styles = {
  uCenter: {
    width: '100%',
    display: 'block',
    textAlign: 'center'
  }
}

export default Demo
