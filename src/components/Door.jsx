/* Door.jsx */
import React from 'react';
import './Door.css';

function Button({ label, onClick, isLastDoor, isLocked }) {
    return (
        <button
            className={`custom-door ${isLocked ? 'locked' : isLastDoor ? 'custom-door-last' : ''}`}
            onClick={!isLocked ? onClick : undefined} // Disable click if locked
            //disabled={isLocked} // Optionally use HTML disabled attribute
            >
            {label}
        </button>
    );
}

export default Button;