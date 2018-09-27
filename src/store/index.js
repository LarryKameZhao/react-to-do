import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducer from './reducer'
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(thunk),);
const store = createStore (reducer, enhancer);
// sagaMiddleware.run(mySaga)
export default store
