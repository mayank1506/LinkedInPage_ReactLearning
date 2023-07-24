import React, { useState } from 'react';

const SkillForm = ({ onAddSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== '') {
      onAddSkill(newSkill);
      setNewSkill('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add skill"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillForm;