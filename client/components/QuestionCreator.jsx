import React from 'react';

const QuestionCreator = ({ 
    newQuestion,
    selectedResponse,
    addQuestion,
    updateResponse,
    updateQuestion,
  }) => (
  <div>
    <form onSubmit={addQuestion}>
      <input 
        type='text' 
        value={newQuestion}
        onChange={e => updateQuestion(e.target.value)} 
      />
      <div className='radio'>
        <label htmlFor="textResponse">
          <input 
            type="radio" 
            value="textResponse" 
            name="responseOptions"
            checked={selectedResponse}
            onChange={e => updateResponse(e.target.value)}  
          />
          Text Response
        </label>
      </div>
      <div className='radio'>
        <label htmlFor="multipleChoice">
          <input 
            type="radio" 
            value="multipleChoice" 
            name="responseOptions"
            checked={selectedResponse}
            onChange={e => updateResponse(e.target.value)} 
          />
          Multiple Choice
        </label>
      </div>
      <input type='submit' value='Add Question' />
    </form>
  </div>
)

export default QuestionCreator;