import React from "react";
import {
  BsBugFill,
  BsGrid1X2Fill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsBugFill className="icon_header" />
          Bugs finder
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <header>
        <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZatGFLlYaCtxHedeksyxN7z_aQoXvcEqwCA&s"
            alt="user-img"
            className="profile-img"
          />
        </div>
        <span>Admin Profile</span>
      </header>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> User
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Bugs Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
