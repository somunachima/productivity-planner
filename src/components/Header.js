import React from 'react';
import Button from './Button';
import "../index.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
        <h2 className="app-header">Productivity Planner</h2>
        <Button className="btn-header" onClick={showForm} color={changeTextAndColor ? '#6B0A22' : '#007B71'} text= {changeTextAndColor ? 'Close' : 'Add'} />
      </header>
    )
}
export default Header;
