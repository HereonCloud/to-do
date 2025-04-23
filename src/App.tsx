import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  const addToDo = (toDo: string) => {
    return setToDoList([...toDoList, toDo]);
  };

  const deleteToDo = (k: number) => {
    const newToDoList = toDoList.filter((_, key) => {
      return key !== k;
    });

    setToDoList(newToDoList);
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
      {toDoList &&
        toDoList.map((t, k) => {
          return (
            <div key={k}>
              <span>{t}</span>
              <button onClick={() => deleteToDo(k)}>Delete</button>
            </div>
          );
        })}
    </>
  );
}

export default App;
