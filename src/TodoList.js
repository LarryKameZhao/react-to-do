import React, {Component} from 'react';
import TodoListUI from './TodoListUI'
import store from './store/index.js'
import {
  addTodoItemAction,
  delTodoItemAction,
  getTodoList,
  getInputChangeAction,
} from './store/actionCreators'
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render () {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }

  componentDidMount () {
    const action = getTodoList()
    store.dispatch(action)
  }



  handleInputChange (e) {
    console.log('----input---')
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange () {

    this.setState(store.getState())
  }
  handleBtnClick () {
    const action = addTodoItemAction()
    store.dispatch(action)
  }
  handleItemDelete (index) {
    const action = delTodoItemAction(index)
    store.dispatch(action)
  }

}

export default TodoList
