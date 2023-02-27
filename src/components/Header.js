import React from 'react';
import Button from './Button';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
      <header>
        <div className="header">
          <div>
            <button onClick={() => setButtonPopup(true)} className="info-btn">About</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h6>Inspired by Grace Beverley's</h6>
          </Popup>

          <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h6>Inspired by Grace Beverley's</h6>
          </Popup>
          </div>
          <h2 className="app-header">Productivity Planner</h2>
          <Button className="btn-header" onClick={showForm} color={changeTextAndColor ? '#6B0A22' : '#007B71'} text= {changeTextAndColor ? 'Close' : 'Add'} />
        </div>
      </header>
    )
}
export default Header;
