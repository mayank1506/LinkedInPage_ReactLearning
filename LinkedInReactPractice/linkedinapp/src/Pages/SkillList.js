import React from 'react';

const SkillList = ({ skills, onDeleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          {skill}
          <button onClick={() => onDeleteSkill(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
