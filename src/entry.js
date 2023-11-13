import React, { useState } from 'react';

function Entry({ numberToMatch, onCorrectInput }) {
  const handleInputChange = (event) => {
    const inputData = event.target.value;

    if (parseInt(inputData, 10) === numberToMatch) {
      console.log('correct');
      // Call the onCorrectInput function to update the number
      onCorrectInput();
      //clear the entry field
        event.target.value = '';
    }
    console.log(inputData);
  };

  return <input className="entry-field" onChange={handleInputChange} type={'number'} />;
}

export default Entry;