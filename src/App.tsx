import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  const addToDo = (toDo: string) => {
    return setToDoList([...toDoList, toDo]);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToDo(newToDo);
        }}
      >
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button type="submit">Add a to do</button>
      </form>
      {toDoList}
    </>
  );
}

export default App;
