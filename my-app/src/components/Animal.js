import { useState } from "react";

export default function Animal(props) {
  const index = Math.floor(Math.random() * 10) + 1;
  const [result, setResult] = useState("");
  const [name, setName] = useState(props.animal[index].name);

  const viewResult = (ani) => {
    if (name === ani.name) {
      setResult("WIN");
    } else {
      setResult("LOSE");
    }
  };

  const playAgain = () => {
    const newIndex = Math.floor(Math.random() * 10) + 1;
    setName(props.animal[newIndex].name);
    setResult("");
  };

  return (
    <>
      <div className="left-div">
        <h3>Result</h3>
        <div className="result">{result}</div>
      </div>
      <div className="middle">
        <h3>Animal Name</h3>
        <div className="animal-name">{name}</div>
      </div>
      <div className="right-div">
        <div className="selectAni">
          <h3>Select an Animal</h3>
          <button className="play-again-btn" onClick={playAgain}>
            Play Again
          </button>
        </div>

        <div className="animal-grid">
          {props.animal.map((ani) => (
            <img
              className="img"
              src={require("../assets/fig/" + ani.img)}
              alt="animal"
              onClick={() => {
                viewResult(ani);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
