import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
    render () {
        return (
            <Fragment>
              {
                //sss
              }
              <label htmlFor="insertArea">input</label>
                <input id="insertArea" className="input" value={this.state.inputValue}
                  onChange={this.handleInputChange.bind(this)}
                /> <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                <ul>
                  {
                    this.state.list.map((item,index)=>{
                      return (
                      <div>
                        <TodoItem content={item}/>
                      </div>

                      )
                    })
                  }
                </ul>
            </Fragment>
        )
    }

    handleInputChange (e) {
      console.log(this)
      console.log(e.target.value)
      this.setState({
        inputValue: e.target.value
      })
    }

    handleBtnClick (e) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }

    handleItemDel (index) {
      console.log(index)
      const list = [...this.state.list]
      list.splice(index,1)
      this.setState({
        list
      })
    }
}

export default TodoList
