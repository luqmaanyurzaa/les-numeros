import React from 'react';

function Entry() {

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            const inputData = event.target.value;

            console.log(inputData)
        }
    };
    return <input className="entry-field" onKeyUp={handleKeyUp} />
}

export default Entry;