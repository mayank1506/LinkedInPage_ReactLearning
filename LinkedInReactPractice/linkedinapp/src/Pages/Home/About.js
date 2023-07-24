import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Profile.css";
import {
  updateProfile,
  addSkill,
  deleteSkill,
  addEducation,
  deleteEducation,
} from "../redux/actions";

const About = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [about, setAbout] = useState(localStorage.getItem("about") || (user.about || ""));




  return (
    <div className="container">
      <div className="profile-section">
        
        <div className="about-section">
          <h3>About</h3>
          <div className="add-section">
            {editing ? (
              <textarea
                type="text"
                placeholder="Add About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            ) : (
              <p>{about}</p>
            )}
            {/* <button onClick={handleAddAbout}>Add</button> */}
          </div>
        </div>
        
          
        
      </div>
    </div>
  );
};

export default About;
