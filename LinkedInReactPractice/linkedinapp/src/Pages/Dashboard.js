import React from "react";
import "./Dashboard.css";
import Skills from "./Home/Skills";
import Education from "./Home/Education";
import About from "./Home/About";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const Navigate = useNavigate();

  const onEdit = () => {
    Navigate("/Profile");
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-profile-section">
          <button className="edit-button" onClick={onEdit}>
            Edit
          </button>
          <About edit={false} />
          <Skills edit={false} />
          <Education edit={false} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;