import React from 'react';

const SurveyModal = (props) => {
  if (!props.show) {
    return null;
  }
  return(
    <div>
      <div>img</div>
      <input type='text' />
      <input type='button' value='Submit' />
    </div>
  );
}

export default SurveyModal;