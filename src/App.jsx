import { useState } from "react";
// import s from "./style.module.css";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your React difficulty</h1>
    </div>
  );
}

export default App;
