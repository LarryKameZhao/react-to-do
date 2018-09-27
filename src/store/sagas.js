import { takeEvery, put } from 'redux-saga/effects'
import {GET_INIT_LIST,INIT_ITEM} from "./actionTypes";
import axios from "axios";
import {getInitListAction} from "./actionCreators";
function* getInitListItem() {
  try {
    // const res =  axios.get('/api/todolist')
    const res = ['sss','lk','zzq']
    const action = getInitListAction(res.data)
    yield put(action)

  }
  catch (e) {
    console.log('fail saga')
  }


}
function* mySaga() {
  yield takeEvery(INIT_ITEM,getInitListItem)
}

export default mySaga;
