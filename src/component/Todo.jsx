import { useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currenyArray) => [toDo, ...currenyArray]);
    setToDo("");
  };
  // console.log(toDo);
  console.log(toDos);
  return (
    <>
      <h1>{toDos.length}</h1>
      <form onSubmit={onSubmit}>
        {/* <form > */}
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default Todo;
