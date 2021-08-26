import React from 'react';
import QuestionCard from './QuestionCard.jsx';

const QuestionCardDisplay = ({ questionList, selectedDelete, updateDelete, addForm, deleteQuestion}) => {
  const questionCards = questionList.map((question, idx) => (
    <QuestionCard
      key={idx}
      index={idx}
      question={question.question}
      response={question.response}
      updateDelete={updateDelete}
      selectedDelete={selectedDelete}
    />
  ));
  return (
    <div>
      <form onSubmit={addForm}>
        <div>
          { questionCards }
        </div>
        <div>
          <input type='button' value='Delete Question' onClick={e => deleteQuestion(selectedDelete)} />
          <input type='submit' value='Save' />
        </div>
      </form>  
    </div>
  );
};

export default QuestionCardDisplay;