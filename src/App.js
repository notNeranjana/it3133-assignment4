import { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Animal from "./components/Animal";
import AnimalsGrid from "./components/AnimalsGrid";
import { animals } from "./data/AnimalsDb";

function App() {
  const [result, setResult] = useState("");
  const [randomAnimal, setRandomAnimal] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");

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
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
    </div>
  );
}

export default App;
