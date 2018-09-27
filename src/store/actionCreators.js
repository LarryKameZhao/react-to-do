import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM,INIT_ITEM,GET_INIT_LIST} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = (value) =>({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const delTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initItemAction = (data) => ({
  type: INIT_ITEM,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then((res)=>{
      const data = res.data
      const action = initItemAction(data)
      dispatch(action)
    })
  }
}

export const getInitListAction = () => ({
  type: INIT_ITEM
})


