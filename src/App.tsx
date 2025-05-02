import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState<{ toDo: string; isDone: boolean }[]>(
    []
  );
  const [newToDo, setNewToDo] = useState<string>("");

  const addToDo = (toDo: string) => {
    return setToDoList([...toDoList, { toDo: toDo, isDone: false }]);
  };

  const deleteToDo = (k: number) => {
    const newToDoList = toDoList.filter((_, key) => {
      return key !== k;
    });

    setToDoList(newToDoList);
  };

  const toggleToDo = (k: number) => {
    const newToDoList = toDoList.map((td, key) => {
      return k === key ? { toDo: td.toDo, isDone: !td.isDone } : td;
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
              <span
                style={{
                  textDecoration: t.isDone ? "line-through" : "none",
                }}
              >
                {t.toDo}
              </span>
              <button onClick={() => toggleToDo(k)}>Done</button>
              <button onClick={() => deleteToDo(k)}>Delete</button>
            </div>
          );
        })}
    </>
  );
}

export default App;
