import React from 'react'

export default class Cell extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {color: props.value} // ...define initial state with a key of 'color' set to the 'value' prop
  }

  // state = {
  //   color: this.props.val
  // }
  clickHandler = () => {
    this.setState({color: '#333'})
  }

  render () {
    return (
      <div onClick={this.clickHandler} className='cell' style={{backgroundColor: this.state.color}}></div>
    )
  }
}