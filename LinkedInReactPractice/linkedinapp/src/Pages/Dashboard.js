import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import Skills from "./Home/Skills";
import Education from "./Home/Education";
import About from "./Home/About";
import {
  updateProfile,
} from "./redux/actions";
import Header from "./Header";


const Profile = () => {
  const user = useSelector((state) => state.user);
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const handleSaveProfile = () => {
    // dispatch(updateProfile({ about }));
    setEditing(false);
  };


 
  
  return (
    <>
    <Header/>
    <div className="container">
      <div className="profile-section">
        <h2>Profile</h2>
        {editing ? (
          <button onClick={handleSaveProfile}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
          
        )}
        <About edit={editing}/>
        <Skills edit={editing} />
        
      </div>
    </div>
    </>
  );
};

export default Profile;
