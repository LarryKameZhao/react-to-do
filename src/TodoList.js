import React, {Component} from 'react';
import store from './store/index'
import {connect} from 'react-redux'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
          <button onClick={this.props.handleClick}>submit</button>
        </div>
        <ul>
          {
            this.props.list.map((item,index) => {
              return <li onClick={()=>{this.props.handleDelete(index)}} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )

  }
  handleInputChange (e) {
    console.log(e.target.value)
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick () {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete (index) {
      const action = {
        type:'delete_item',
        index
      }
      dispatch(action)

    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
