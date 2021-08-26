import React from 'react';

const QuestionCard = ({
  index,
  question,
  response,
  updateDelete,
  selectedDelete
}) => {
  return(
    <div className='radio'>
      <label htmlFor="Question">
        <input 
          type="radio" 
          value={index} 
          name="DeleteOption"
          checked={selectedDelete}
          onChange={e => updateDelete(e.target.value)}  
        />
        <div>
          <p>
            <strong>{ `${index}: ` }</strong>
            { question } 
          </p>
          <p> { response } </p>
        </div>
      </label>
    </div>
  )
}

export default QuestionCard;