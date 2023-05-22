import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const QuestionBody = (props) => {
  return (
    <div className="question__body">
      <p className="question__text">
        {props.text}
      </p>
      <Icon type={props.iconType} />
    </div>
  );
};

export default QuestionBody;