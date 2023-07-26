
const initialState = {
  user: {
    about: "",
  },
  skills: [],
  education: [],
};

// const userReducer = (state = { isLoggedIn: false }, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//       };
//     default:
//       return state;
//   }
// };




const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          about: action.payload.about,
        },
      };
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload.skill],
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload.index),
      };
    case "ADD_EDUCATION":
      return {
        ...state,
        education: [...state.education, action.payload.education],
      };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.payload.index),
      };
    default:
      return state;
  }
};

export default profileReducer;