import { useState } from "react";

function Mgdl() {
  const [amount, setAmount] = useState();
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const onReset = () => setAmount(0);
  const onFlip = () => {
    setFlipped((current) => !current);
    setAmount(0);
  };
  return (
    <>
      <h1>mg/dL & mmol/L</h1>
      <label htmlFor="mgdl">mg/dL</label>
      <input
        value={flipped ? (amount * 18).toFixed(2) : amount || ""}
        id="mgdl"
        placeholder="mg/dL"
        type="number"
        onChange={onChange}
        // disabled={false}
        disabled={flipped}
        // disabled={flipped === true}
      />
      <label htmlFor="mmol">mmol/L</label>
      <input
        value={flipped ? amount || "" : (amount / 18).toFixed(2)}
        id="mmol"
        placeholder="mmol/L"
        type="number"
        onChange={onChange}
        // disabled={true}
        disabled={!flipped}
        // disabled={flipped === false}
      />
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </>
  );
}

export default Mgdl;