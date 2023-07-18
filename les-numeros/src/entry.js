import React from 'react';

function Entry() {

    const handleInputChange = (event) => {
        const inputData = event.target.value;
        console.log(inputData);
      };
    
    return <input className="entry-field" onChange={handleInputChange} />
}

export default Entry;

