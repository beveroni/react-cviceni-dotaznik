import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = ({ text }) => {
  const [answer, setAnswer] = useState('symbolQuestion');
  const handleOptionSelected = (type) => {
    setAnswer(type);
  };
  return (
    <div className="question">
      <QuestionBody
        // iconType={answered ? 'symbolTick' : 'symbolQuestion'}
        iconType={answer}
        text={text}
      />
      <div className="question__options">
        <Option
          type="smileyStrongYes"
          text="Souhlasím"
          onSelected={handleOptionSelected}
        />
        <Option
          type="smileyYes"
          text="Spíše souhlasím"
          onSelected={handleOptionSelected}
        />
        <Option
          type="smileyNeutral"
          text="Nevím"
          onSelected={handleOptionSelected}
        />
        <Option
          type="smileyNo"
          text="Spíše nesouhlasím"
          onSelected={handleOptionSelected}
        />
        <Option
          type="smileyStrongNo"
          text="Nesouhlasím"
          onSelected={handleOptionSelected}
        />
      </div>
    </div>
  );
};

export default Question;
