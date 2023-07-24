import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, ADD_SKILL, DELETE_SKILL,ADD_EDUCATION,DELETE_EDUCATION } from './actions';

const userReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

const skillsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SKILL:
      return [...state, action.payload];
    case DELETE_SKILL:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const educationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return [...state, action.payload];
    case DELETE_EDUCATION:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  skills: skillsReducer,
  education: educationReducer
});

export default rootReducer;
