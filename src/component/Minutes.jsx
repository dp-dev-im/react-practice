import { useState } from "react";

function Minutes(test) {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const onReset = () => setAmount(0);
  const onFlip = () => setFlipped((current) => !current);
  return (
    <>
      <h1>Minutes & Hours</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={flipped ? Math.round(amount * 60) : amount}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
        // disabled={false}
        disabled={flipped}
        // disabled={flipped === true}
      />
      <label htmlFor="hours">Minutes</label>
      <input
        value={flipped ? amount : Math.round(amount / 60)}
        id="hours"
        placeholder="Hours"
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

export default Minutes;