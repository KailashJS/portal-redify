import React from "react";
import "./profileSection.css";

function ProfileSection() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Profile</h1>
        <button className="userAddButton">Clear</button>
      </div>
      <div className="userContainer">
          <div className="userShow"></div>
          <div className="userUpdate"></div>
      </div>
    </div>
  );
}

export default ProfileSection;
