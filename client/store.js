import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
// need to import actions


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// need dispatch store with the state

export default store;