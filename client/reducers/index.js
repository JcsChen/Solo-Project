import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer.js';

export default combineReducers({
  questions: questionsReducer,
});