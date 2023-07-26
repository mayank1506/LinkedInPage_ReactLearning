import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Education.css";
import { addEducation, deleteEducation, updateProfile } from "../redux/actions";

const Education = (props) => {
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();
  
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });

  const handleAddEducation = () => {
    if (
      newEducation.school.trim() !== "" &&
      newEducation.degree.trim() !== "" &&
      newEducation.graduationYear.trim() !== ""
    ) {
      dispatch(addEducation(newEducation));
      dispatch(updateProfile({ education: [...education, newEducation] }));
      setNewEducation({ school: "", degree: "", graduationYear: "" });
    }
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
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
          {props.edit && (
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

export default Education;
