import React, { Component } from 'react'
import './style.css'
 import { CSSTransition,TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToggole = this.handleToggole.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render () {
    return (
        <div>
          <TransitionGroup>
          {
            this.state.list.map((item,index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => {el.style.color='pink'}}
                  appear={true}
                  key={index}
                >
                <div>{item}</div>
                </CSSTransition>
              )
            })
          }
          </TransitionGroup>
            <div >hello</div>

        <button onClick={this.handleAddItem}>toggole</button>
        </div>

    )
  }
  handleToggole () {
    this.setState({
      show: this.state.show ? false:true
    })
  }
  handleAddItem () {
    this.setState((prevState) => {
      return {
        list: [...prevState.list,'item']
      }
    })
  }

}

export default App;
