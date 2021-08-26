import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuestionCreator from '../components/QuestionCreator.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import { updateQuestion, updateResponse, addQuestion } from '../actions/actions.js';

const mapStateToProps = ( { questions } ) => ({
  selectedResponse: questions.selectedResponse,
  added: questions.added,
  newQuestion: questions.newQuestion
})

const mapDispatchToProps = (dispatch) => bindActionCreators( { updateQuestion, updateResponse, addQuestion }, dispatch);

class MainContainer extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Survey Q</h1>
        <QuestionCreator 
          selectedResponse={this.props.selectedResponse}
          newQuestion={this.props.newQuestion}
          updateQuestion={this.props.updateQuestion}
          updateResponse={this.props.updateResponse}
          addQuestion={this.props.addQuestion}
        />
        <DisplayContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);