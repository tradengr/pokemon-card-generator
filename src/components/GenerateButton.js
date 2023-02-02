import React from 'react';

const GenerateButton = ({ getPokeData }) => {
  return (
    <div>
      <button className='button' onClick={getPokeData}>
        Generate
      </button>
    </div>
  );
};

export default GenerateButton;