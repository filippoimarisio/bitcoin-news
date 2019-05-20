import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const enhancer = compose(
  applyMiddleware(ReduxThunk),
)

const store = createStore(reducer, enhancer)
export default store