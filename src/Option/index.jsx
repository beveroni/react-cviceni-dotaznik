import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = (props) => {
  return (
    <div className="option">
      <Icon type={props.type} />
      <div>{props.text}</div>
    </div>
  );
};

export default Option;