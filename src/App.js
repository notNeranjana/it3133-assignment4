import { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Animal from "./components/Animal";

function App() {
  const [result, setResult] = useState("");
  const [randomAnimal, setRandomAnimal] = useState("");

  return (
    <div className="app">
      <header>
        <h1>Animal Matching Game</h1>
      </header>

      <div className="main">
        <Result result={result} />

        <Animal randomAnimal={randomAnimal} setRandomAnimal={setRandomAnimal} />
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
