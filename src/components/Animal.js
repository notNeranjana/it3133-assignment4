import React from "react";

const Animal = ({ randomAnimal, setRandomAnimal }) => {
  return (
    <div className="animal">
      <h3>Animal Name</h3>
      <p className="animal-name">{randomAnimal}</p>
    </div>
  );
};

export default Animal;
