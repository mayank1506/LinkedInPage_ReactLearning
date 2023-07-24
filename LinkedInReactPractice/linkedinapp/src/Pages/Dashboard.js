import React from "react";
import Header from "./Header";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />
      <h1>Please go to the Profile</h1>
      <div>Dashboard page</div>
      <div className="homepage">
      <header>
        
        <h1>Welcome to My LinkedIn App</h1>
      </header>
      <div className="profile">
        <img src="C:\Users\HP\Desktop\LinkedInPage_ReactLearning\LinkedInReactPractice\linkedinapp\public\MYPICTURE.jpeg" />
        <h2>Mayank Vishwakarma</h2>
        <p>Associate Software Engineer | Techsophy Solutions</p>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <p>
          Hi, I'm Mayank. I am a passionate and results-driven professional. I thrive in fast-paced environments and enjoy taking on new challenges. Let's connect and explore potential opportunities!
        </p>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Job Title</h3>
          <p>Techsophy Solutions Pvt LTD</p>
          <p>Duration: Jan 2023 - Present</p>
          <ul>
            <li>Associate Software Engineer</li>
            <li>Software Intern</li>
          </ul>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Javascript</li>
          <li>ReactJS</li>
        </ul>
      </div>
    </div>
  
    </>
  );
}

export default Dashboard;
