import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

import './topBar.scss'

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <Link to="/user-sessions/new">
      <li key="sign-in">
          Sign In
        </li>
      </Link>,
      <Link to="/users/new" className="primary-btn">
        <li key="sign-up">
          Sign Up
        </li>
      </Link>
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  const toggleNav = () => {
    let toggle = document.getElementById("navBar");
    if (toggle.className === "nav-bar") {
      toggle.className += " responsive";
    } else {
      toggle.className = "nav-bar";
    }
  };

  return (
    <div className="nav-bar-container">
    <div className="nav-bar" id="navBar">
      <Link to="/" onClick={toggleNav}>
        <img
          id='nav-bar-logo'
          className="nav-bar-logo"
          src='https://image.shutterstock.com/shutterstock/photos/1751169785/display_1500/stock-vector-vector-illustration-concept-of-meditation-workflow-health-benefits-for-body-mind-and-emotions-1751169785.jpg'
          alt="Zen Apps Logo"
        />Zen Apps
      </Link>
      <div className="nav-bar-right">
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/Jobs">
        <li>Jobs</li>
        </Link>
        <Link to="/">
        <li>@My Account</li>
        </Link>
        {user ? authenticatedListItems : unauthenticatedListItems}
      </div>
    </div>
  </div>
  );
};

export default TopBar;
