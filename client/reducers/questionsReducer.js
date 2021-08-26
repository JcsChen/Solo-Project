import * as types from '../constants/actionTypes';

const initialState = {
  questionList: [],
  newQuestion: '',
  TotalForms: 0,
  saved: true,
  selectedResponse: '',
  selectedDelete: ''
}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_QUESTION:
      return {
        ...state,
        newQuestion: action.payload,
      };
    case types.UPDATE_RESPONSE:
      return {
        ...state,
        selectedResponse: action.payload,
      };
    case types.UPDATE_DELETE:
      return {
        ...state,
        selectedDelete: action.payload,
      };
    case types.ADD_QUESTION:
      return {
        ...state,
        questionList: state.questionList.concat({
          question: action.payload.newQuestion,
          response: action.payload.selectedResponse
        }),
        newQuestion: '',
        selectedResponse: '',
        saved: false
      };
    case types.DELETE_QUESTION:
      console.log(action.payload)
      const newQuestionList = state.questionList.filter(question => question !== action.payload);
      return {
        ...state,
        questionList: newQuestionList,
        saved: false
      };
    case types.ADD_FORM:
      return {
        ...state,
        saved: true
      };
 
    default:
      return state;
  }
}

export default questionsReducer;