import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState<{ toDo: string; isDone: boolean }[]>(
    localStorage.getItem("toDoList")
      ? JSON.parse(localStorage.getItem("toDoList") as string)
      : []
  );
  const [newToDo, setNewToDo] = useState<string>("");

  const addToDo = (toDo: string) => {
    const newToDoList = [...toDoList, { toDo: toDo, isDone: false }];
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    setNewToDo("");
    return setToDoList(newToDoList);
  };

  const deleteToDo = (k: number) => {
    const newToDoList = toDoList.filter((_, key) => {
      return key !== k;
    });
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    setToDoList(newToDoList);
  };

  const toggleToDo = (k: number) => {
    const newToDoList = toDoList.map((td, key) => {
      return k === key ? { toDo: td.toDo, isDone: !td.isDone } : td;
    });
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
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
          required
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
