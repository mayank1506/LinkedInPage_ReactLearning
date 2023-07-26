export const loginSuccess = () => ({
  type: loginSuccess,
});

export const updateProfile = (profileData) => {
  return {
    type: "UPDATE_PROFILE",
    payload: profileData,
  };
};

export const addSkill = (skill) => {
  return {
    type: "ADD_SKILL",
    payload: { skill },
  };
};

export const deleteSkill = (index) => {
  return {
    type: "DELETE_SKILL",
    payload: { index },
  };
};

export const addEducation = (education) => {
  return {
    type: "ADD_EDUCATION",
    payload: { education },
  };
};

export const deleteEducation = (index) => {
  return {
    type: "DELETE_EDUCATION",
    payload: { index },
  };
};
