import React from "react";
import "./Dashboard.css";
import Skills from "./Home/Skills";
import Education from "./Home/Education";
import About from "./Home/About";
import Header from "./Header";
import Experience from "./Home/Experience";
import { useNavigate } from "react-router-dom";
import MyPic from "../MYPICTURE.jpg";
import { useSelector } from "react-redux";
import LoginPage from "./LoginPage";

const Dashboard = () => {
  // const user=useSelector((s)=>s.user.login);
  const Navigate = useNavigate();
  const login = useSelector((state) => state.user.login);
  const onEdit = () => {
    Navigate("/Profile");
  };

  if (!login) {
    Navigate("/");
  }

  return (
    <>
      {login ? (
        <div>
          <Header />
          <div class="master-container">
            <div className="dashboard-Photo">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card shadow-sm">
                      <div className="card-header bg-transparent text-center">
                        <img
                          className="profile_img"
                          src={MyPic}
                          alt="profile"
                        />
                        <h3>Mayank</h3>
                      </div>
                      <div className="card-body">
                        <p className="mb-0">
                          <strong class="pr-1">Current Company:</strong>____
                        </p>
                        <p className="mb-0">
                          <strong class="pr-1">Graduation Year:</strong>____
                        </p>
                        <p className="mb-0">
                          <strong class="pr-1">Place</strong>____
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-container">
              <div className="dashboard-profile-section">
                <button className="edit-button" onClick={onEdit}>
                  Edit
                </button>
                <About edit={false} />
                <br />
                <Education edit={false} />
                <br />
                <Experience edit={false} />
                <br />
                <Skills edit={false} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        (alert("Please Login First"),
        (
          <div>
            <LoginPage />
          </div>
        ))
      )}
    </>
  );
};

export default Dashboard;
