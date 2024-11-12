﻿/* App.jsx */

import React, { useState } from 'react'
import Door from './components/Door';
import Header from './components/Header';
import messages from './components/messages';
import './components/Door.css';

function App() {
    /*
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    
  )*/

    const doors = Array.from({ length: 24 }, (_, index) => index + 1);

    // Get the current day of the month
    const currentDay = new Date().getDate()+24;

    // State to keep track of the selected door's message
    const [selectedMessage, setSelectedMessage] = useState("");

    // Function to handle door click
    const openDoor = (doorNumber) => {
        setSelectedMessage(messages[doorNumber - 1]);
    };

    return (
        <div>
            <Header /> {/* Add the header above the Calendar grid */}

            {/* Main container for the message and grid layout */}
            <div className="main-container">

                <div className="Calendar">
                    {doors.map((number) => (
                        <Door
                            key={number}
                            label={`${number}`}
                            onClick={() => openDoor(number)}
                            isLastDoor={number === 24} // Pass a prop to identify the 24th door
                            isLocked={number > currentDay} // Lock doors beyond the current day of the month
                        />
                    ))}
                </div>

                {/* Display the selected message */}
                <div className="message">
                    {selectedMessage ? (
                        <>
                            <h2>{selectedMessage.title}</h2>
                            <p className="reference"><em>{selectedMessage.reference}</em></p>
                            <hr />
                            <div className="content">
                                {selectedMessage.content }
                            </div>
                        </>
                    ) : (<p></p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App
