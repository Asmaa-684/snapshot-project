import React from "react";
import Form from "./Form";
import { FaSnapchat } from 'react-icons/fa';
import { GiMountainCave } from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import {GiBirdCage } from 'react-icons/gi';
  import {MdFastfood} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot <FaSnapchat/></h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Mountain <GiMountainCave/></NavLink></li>
        <li><NavLink to="/beach">Beaches <FaUmbrellaBeach/></NavLink></li>
        <li><NavLink to="/bird">Birds <GiBirdCage/></NavLink></li>
        <li><NavLink to="/food">Food <MdFastfood/> </NavLink></li>
      </ul>
    </nav>
    </div>
  );
};

export default Header;