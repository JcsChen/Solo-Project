import axios from 'axios';
import * as types from '../constants/actionTypes.js';

export const updateQuestion = data => ({
  type: types.UPDATE_QUESTION,
  payload: data
});

export const updateResponse = data => ({
  type: types.UPDATE_RESPONSE,
  payload: data
});
export const updateDelete = data => ({
  type: types.UPDATE_DELETE,
  payload: data
});

export const addQuestion = (e) => (dispatch, getState) => {
  e.preventDefault()
  const question = getState().questions.newQuestion;
  const selected = getState().questions.selectedResponse;
  if (question && selected) {
    dispatch({
      type: types.ADD_QUESTION,
      payload: { newQuestion: question, selectedResponse: selected }
    })
  }
}

export const deleteQuestion = () => (dispatch, getState) => {
  const selected = getState().questions.questionList.selectedDelete;
  if (selected) {
    dispatch({
      type: types.DELETE_QUESTION,
      payload: selected
    })
  }
}

export const addForm = (e) => (dispatch, getState) => {
  e.preventDefault();
  axios.put('/forms', getState().questions.questionList)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.ADD_FORM });
    })
    .catch(console.error);
}