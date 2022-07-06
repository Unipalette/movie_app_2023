import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Boom() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1 style={{ fontSize: "120px" }}>BOOM!💥</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For ", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here 👀"
      />
      <h2>{counter}</h2>
      <button onClick={onClick}>클릭</button>

      {showing ? <Boom /> : null}
      <button
        style={{ display: "block", marginTop: "20px" }}
        onClick={onClick2}
      >
        {showing ? "Hide" : "show"}
      </button>
    </div>
  );
}

export default App;
