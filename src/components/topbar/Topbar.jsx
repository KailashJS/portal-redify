import React from "react";
import logo from "../../Logo.png";
import "./topbar.css";
import { Link } from "react-router-dom";
import { NotificationsNone, Settings } from "@material-ui/icons"; 

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link className="link" to="/">
            <span className="logo">
              <img src={logo} alt="Logo" className="logo-icon" />
              Redify
            </span>
          </Link>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
              <Link className="link" to="/notifications">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </Link>
            </div>
            
            <div className="topbarIconContainer">
              <Link className="link" to="/settings">
                <Settings />
                <span className="topIconBadge">2</span>
              </Link>
            </div>
            <Link className="link" to="/myProfile">
              <img src="https://avatars.githubusercontent.com/u/42248178?v=4" alt="topAvatar" className="topAvatar" />
            </Link>
        </div>
      </div>
    </div>
  );
}
