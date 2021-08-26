import React from 'react';
import QuestionCardDisplay from '../components/QuestionCardDisplay.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDelete, deleteQuestion, addForm } from '../actions/actions.js';

const mapStateToProps = ({ questions }) => ({
  selectedDelete: questions.selectedDelete,
  questionList: questions.questionList
});

const mapDispatchToProps = ( dispatch ) => bindActionCreators( { updateDelete, deleteQuestion, addForm } , dispatch);

const DisplayContainer = props => {
  return (
    <div>
      <QuestionCardDisplay 
        updateDelete={props.updateDelete}
        selectedDelete={props.selectedDelete}
        questionList={props.questionList}
        deleteQuestion={props.deleteQuestion}
        addForm={props.addForm}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);