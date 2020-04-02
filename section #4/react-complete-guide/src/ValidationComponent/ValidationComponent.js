import React from 'react';


const ValidationComponent = ({textSize}) => {
    const check = () => {
        if(textSize < 5) return 'Text too short';
        return 'Text long enough'
    }

    return (
        <p>{check()}</p>
    )
}

export default ValidationComponent;