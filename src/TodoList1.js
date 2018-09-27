import React, {Component} from 'react';
import 'antd/dist/antd.css'
import { Input ,Button,List} from 'antd'
import store from './store/index.js'
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];
class TodoList1 extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    store.subscribe(this.handleStateChange)
  }
  render () {
    return (
      <div style={{marginTop:10,marginLeft:20}}>
        <div>
          <Input placeholder='todo info'
                 style={{width:200,marginRight:20}}
                 value={this.state.inputValue}
                 onChange={this.handleInputChange}
          >
          </Input>
          <Button type="primary"
                  onClick={this.handleBtnClick}
          >submit</Button>
        </div>

        <List
          style={{marginTop:20,width:300}}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
  handleStateChange () {
    this.setState(store.getState())
  }
  handleInputChange (e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleBtnClick () {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  handleItemDelete (index) {
    alert(index)
  }


}

export default TodoList1
