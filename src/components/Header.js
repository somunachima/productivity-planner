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
            <h6>Productivity Planner</h6>
            <p>This app was designed and inspired by Grace Beverley's <a className="grace" href="https://productivitymethod.com/" alt="Productivity Method Website" target="_blank">Productivity Method</a> planners which I am a big fan of!</p>
            <p><strong>How to use</strong></p>
            <p>For each task you list, specify the completion date and time as well as the type of task which includes:</p>
            <span className="task-type">
              <p><strong>Daily Habit:</strong></p>
              <p><strong>Quick tick:</strong></p>
              <p><strong>Task:</strong></p>
              <p><strong>Project:</strong></p>
            </span>
          </Popup>

          <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h6>Productivity Planner</h6>
            <p>This app was designed and inspired by Grace Beverley's <a className="grace" href="https://productivitymethod.com/" alt="Productivity Method Website" target="_blank"><strong>Productivity Method</strong></a> planners which I am a big fan of!</p>
            <p></p>
            <p><strong>How to use</strong><br></br>For each task you list, specify the completion date and time as well as the type of task using the to-do table method, which allows you to prioritise, visualise and group tasks before you start your day.</p>
            <p><u>The type of task include:</u></p>
            <span className="task-type">
              <p><strong>Habit:</strong> Something you'll commit to that day to reach your longer term goals</p>
              <p><strong>Quick tick:</strong> Tasks that take 5 mins or less</p>
              <p><strong>Task:</strong> Tasks that will take you up to 30 mins and don't involved more than 2-3 tasks to get the whole task done</p>
              <p><strong>Project:</strong> This will be broken  down into tasks which can be completed in time blocks over a period of a week or month</p>
              <p><strong>Non-negotitable:</strong> Choose 3 non-negotiable tasks you will get done that day. Its good to choose just 3 that are related to your yearly, quarterly and monthly goals.</p>
            </span>
          </Popup>
          </div>
          <h2 className="app-header">Productivity Planner</h2>
          <Button className="btn-header" onClick={showForm} color={changeTextAndColor ? '#6B0A22' : '#007B71'} text= {changeTextAndColor ? 'Close' : 'Add'} />
        </div>
      </header>
    )
}
export default Header;
