import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import {
  updateProfile,
  addSkill,
  deleteSkill,
  addEducation,
  deleteEducation,
} from "./redux/actions";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const skills = useSelector((state) => state.skills);
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [about, setAbout] = useState(localStorage.getItem("about") || (user.about || ""));
  const [newSkill, setNewSkill] = useState(localStorage.getItem("newSkill") || "");
  const [newEducation, setNewEducation] = useState(JSON.parse(localStorage.getItem("newEducation")) || {
    school: "",
    degree: "",
    graduationYear: "",
  });

  // useEffect(() => {
  //   localStorage.setItem("about", about);
  // }, [about]);

  // useEffect(() => {
  //   var i=0;
  //   localStorage.setItem("newSkill", (skills.map(num=>(num))));
  // }, [newSkill]);

  // useEffect(() => {
  //   localStorage.setItem("newEducation", JSON.stringify(newEducation));
  // }, [{newEducation}]);

  // useEffect(() => {
  //   localStorage.setItem("about", about);
  //   localStorage.setItem("skills", newSkill);
  //   localStorage.setItem("education", newEducation);
  // }, [about,newSkill,newEducation]);

  const handleSaveProfile = () => {
    dispatch(updateProfile({ about }));
    setEditing(false);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      dispatch(addSkill(newSkill));
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index));
  };

  const handleAddEducation = () => {
    if (
      newEducation.school.trim() !== "" &&
      newEducation.degree.trim() !== "" &&
      newEducation.graduationYear.trim() !== ""
    ) {
      dispatch(addEducation(newEducation));
      // setNewEducation({ school: "", degree: "", graduationYear: "" });
    }
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
        <h2>Profile</h2>
        {editing ? (
          <button onClick={handleSaveProfile}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
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
        <div className="skills-section">
          <h3>Skills</h3>
          {editing ? (
            <>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skills-list-item">
                  {skill}
                  <button onClick={() => handleDeleteSkill(index)}>Delete</button>
                </li>
              ))}
            </ul>
          {editing && (
            <div className="add-section">
              <input
                type="text"
                placeholder="Add skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button onClick={handleAddSkill}>Add Skill</button>
            </div>
          )}
          </>
          ) : (
          <p>{newSkill}</p>
)}
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <ul className="education-list">
            {education.map((edu, index) => (
              <li key={index} className="education-list-item">
                <div>
                  <p>{edu.school}</p>
                  <p>{edu.degree}</p>
                  <p>{edu.graduationYear}</p>
                </div>
                <button onClick={() => handleDeleteEducation(index)}>Delete</button>
              </li>
            ))}
          </ul>
          {editing && (
            <div className="add-section">
              <input
                type="text"
                placeholder="School"
                value={newEducation.school}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, school: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Graduation Year"
                value={newEducation.graduationYear}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, graduationYear: e.target.value })
                }
              />
              <button onClick={handleAddEducation}>Add Education</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
