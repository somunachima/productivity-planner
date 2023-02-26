import React from 'react';
import Button from './Button';
import "../index.css";
const Header = ({ showForm, changeTextAndColor }) => {
  function hide() {
    document.querySelectorAll(".popup-container").forEach(el =>
    el.style.visibility = "hidden");
  }
  function show(popup) {
    document.getElementById(popup).style.visibility = "visible";
  }
  return (
      <header>
        <div className="header">
          <a class="info-btn" href="#" onclick="show('about-info')"><h6>About</h6></a>
          <h2 className="app-header">Productivity Planner</h2>
          <Button className="btn-header" onClick={showForm} color={changeTextAndColor ? '#6B0A22' : '#007B71'} text= {changeTextAndColor ? 'Close' : 'Add'} />
        </div>

        <div className="popup-container" id="about-info" onclick="hide()">
          <div class="popup">
            <a href="#" class="btn-x" onclick="hide()"><h5>Close</h5></a>
            <div class="popup-info">
              <h2>Productivity Planner</h2>
              <p>A Task Manager app inspired by Grace Beverley.</p>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header;
