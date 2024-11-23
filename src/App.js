import { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Animal from "./components/Animal";
import AnimalsGrid from "./components/AnimalsGrid";
import { animals } from "./data/AnimalsDb";

function App() {
  const selectRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);

    return animals[randomIndex].name;
  };

  const [result, setResult] = useState("");
  const [randomAnimal, setRandomAnimal] = useState(selectRandomAnimal());
  const [selectedAnimal, setSelectedAnimal] = useState("");

  const checkResult = (selectedAnimal) => {
    if (selectedAnimal === randomAnimal) {
      setResult("Win!");

      setTimeout(() => {
        setResult("");
        setRandomAnimal(selectRandomAnimal());
      }, 5000);
    } else {
      setResult("Lose!");
    }
  };

  return (
    <div className="container">
      <header className="border-orange">
        <h1>Animal Matching Game</h1>
      </header>

      <div className="main">
        <Result result={result} />

        <Animal
          animals={animals}
          randomAnimal={randomAnimal}
          setRandomAnimal={setRandomAnimal}
        />

        <AnimalsGrid
          animals={animals}
          checkResult={checkResult}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
    </div>
  );
}

export default App;
