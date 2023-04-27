import { useState } from "react";

function Km() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const onReset = () => setAmount(0);
  const onFlip = () => {
    setFlipped((current) => !current);
    setAmount("0");
  };
  return (
    <>
      <h1>KM & Mile</h1>
      <label htmlFor="km">KM</label>
      <input
        value={flipped ? (amount * 1.609344).toFixed(2) : amount}
        id="km"
        placeholder="KM"
        type="km"
        onChange={onChange}
        // disabled={false}
        disabled={flipped}
        // disabled={flipped === true}
      />
      <label htmlFor="mile">Miles</label>
      <input
        value={flipped ? amount : (amount / 1.609344).toFixed(2)}
        id="mile"
        placeholder="Mile"
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

export default Km;
