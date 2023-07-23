
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';


export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const updateProfile = (profileData) => ({
  type: UPDATE_PROFILE,
  payload: profileData,
});

export const addSkill = (skill) => ({
  type: ADD_SKILL,
  payload: skill,
});

export const deleteSkill = (index) => ({
  type: DELETE_SKILL,
  payload: index,
});

export const addEducation = (education) => ({
  type: ADD_EDUCATION,
  payload: education,
});

export const deleteEducation = (index) => ({
  type: DELETE_EDUCATION,
  payload: index,
});