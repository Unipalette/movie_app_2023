import { useEffect, useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [...currentArray, toDo]);
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do... 💩"
          />
          <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {toDos.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
