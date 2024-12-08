import React from 'react';
import './Button.css'; 

const ButtonGlobal = ({ text }) => {
  return (
    <button className="custom-button">
      {text}
    </button>
  );
};

export default ButtonGlobal;
