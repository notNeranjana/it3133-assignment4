import React from "react";

const Animal = ({ animals, randomAnimal, setRandomAnimal }) => {
  const selectRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setRandomAnimal(animals[randomIndex].name);
  };

  selectRandomAnimal();

  return (
    <div className="animal border-orange">
      <h3>Animal Name</h3>
      <p className="animal-name">{randomAnimal}</p>
    </div>
  );
};

export default Animal;
