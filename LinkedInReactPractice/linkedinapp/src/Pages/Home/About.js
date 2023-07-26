import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./About.css";


const About = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(user.about || "");

  return (
    <div className="container">
      <div className="profile-section">
        <div className="about-section">
          <h3>About</h3>
          <div className="add-section">
            {props.edit ? (
              <textarea
                type="text"
                placeholder="Add About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            ) : (
              <p>{about}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./About.css";
// import { updateProfile } from "../redux/actions";

// const About = (props) => {
//   const user = useSelector((state) => state.profile.user);
//   const dispatch = useDispatch();
//   const [about, setAbout] = useState(user || "");

//   useEffect(() => {
//     if (!props.edit) {
//       dispatch(updateProfile({ about }));
//     }
//   }, [props.edit, dispatch]);

//   return (
//     <div className="container">
//       <div className={`about-section ${props.edit ? "edit-mode" : ""}`}>
//         <h3>About</h3>
//         <div className="add-section">
//           {props.edit ? (
//             <textarea
//               type="text"
//               placeholder="Add About"
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//             />
//           ) : (
//             <p>{about}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./About.css";
// import { updateProfile } from "../redux/actions";

// const About = (props) => {
//   const user = useSelector((state) => state.profile.user);
//   const dispatch = useDispatch();
//   const [about, setAbout] = useState(user || "");

//   useEffect(() => {
//     if (!props.edit) {
//       dispatch(updateProfile({ about }));
//     }
//   }, [props.edit, dispatch]);

//   return (
//     <div className="container">
//       <div className={`about-section ${props.edit ? "edit-mode" : ""}`}>
//         <h3>About</h3>
//         <div className="add-section">
//           {props.edit ? (
//             <textarea
//               type="text"
//               placeholder="Add About"
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//             />
//           ) : (
//             <p>{about}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;