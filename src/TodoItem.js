import React,{ Component } from 'react';

class TodoItem extends Component {
  constructor (props) {
    super(props);
    this.state
  }
  render () {
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
    )
  }

  handleClick () {
    alert('1')
  }
}

export default TodoItem
