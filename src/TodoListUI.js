import React from 'react'
import { Input ,Button,List} from 'antd'
import 'antd/dist/antd.css'
const TodoListUI = (props) => {
  return (
    <div style={{marginTop:10,marginLeft:20}}>
      <div>
        <Input placeholder='todo info'
               style={{width:200,marginRight:20}}
               value={props.inputValue}
               onChange={props.handleInputChange}
        >
        </Input>
        <Button type="primary"
                onClick={props.handleBtnClick}
        >submit</Button>
      </div>

      <List
        style={{marginTop:20,width:300}}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={ (item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}
// class TodoListUI extends Component {
//   constructor (props) {
//     super(props)
//   }
//   render () {
//     return (
//       <div style={{marginTop:10,marginLeft:20}}>
//         <div>
//           <Input placeholder='todo info'
//                  style={{width:200,marginRight:20}}
//                  value={this.props.inputValue}
//                  onChange={this.props.handleInputChange}
//           >
//           </Input>
//           <Button type="primary"
//                   onClick={this.props.handleBtnClick}
//           >submit</Button>
//         </div>
//
//         <List
//           style={{marginTop:20,width:300}}
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={ (item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
//
//
// }

export default TodoListUI
