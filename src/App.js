import { useState } from "react";
import Minutes from "./component/Minutes";
import Km from "./component/Km";
import Mgdl from "./component/Mgdl";
import styled from "styled-components";
import Cleanup from "./component/Cleanup";

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => setIndex(event.target.value);

  const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Select = styled.select`
    background-color: whitesmoke;
    &:hover {
      color: purple;
    }
  `;

  function Btn({ test, testFn }) {
    return (
      <button
        onClick={testFn}
        style={{
          backgroundColor: "pink",
          color: "white",
          border: 0,
          padding: "10px, 20px",
          borderRadius: "10px",
        }}
      >
        {test}
      </button>
    );
  }
  const [value, setValue] = useState("Save Value");
  const changeValue = () => {
    setValue("Revert Value");
  };

  return (
    <>
      <H1>Super Converter</H1>
      <Select onChange={onSelect}>
        <option value="0">Select an option</option>
        <option value="1">Minutes & Hours</option>
        <option value="2">KM & Mile</option>
        <option value="3">mg/dL & mmoll/L</option>
      </Select>
      {index === "1" ? <Minutes /> : null}
      {index === "2" ? <Km /> : null}
      {index === "3" ? <Mgdl /> : null}

      <Btn test={value} testFn={changeValue} />
      <Btn test="no need render" />

      <hr />
      <Cleanup />
    </>
  );
}

export default App;
