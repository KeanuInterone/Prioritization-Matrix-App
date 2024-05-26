import React from 'react';

const PrioritizeButton = ({ onPressed }) => {
  return (
    <button onClick={onPressed} className="prioritize-button">
      Prioritize
    </button>
  );
};

export default PrioritizeButton;