import { useEffect, useState } from "react";
import Minutes from "./component/Minutes";
// import Km from "./component/Km";
// import Mgdl from "./component/Mgdl";
// import styled from "styled-components";
// import Cleanup from "./component/Cleanup";

// function App() {
//   const [index, setIndex] = useState(0);
//   const onSelect = (event) => setIndex(event.target.value);

//   const H1 = styled.h1`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `;
//   const Select = styled.select`
//     background-color: whitesmoke;
//     &:hover {
//       color: purple;
//     }
//   `;

//   function Btn({ test, testFn }) {
//     return (
//       <button
//         onClick={testFn}
//         style={{
//           backgroundColor: "pink",
//           color: "white",
//           border: 0,
//           padding: "10px, 20px",
//           borderRadius: "10px",
//         }}
//       >
//         {test}
//       </button>
//     );
//   }
//   const [value, setValue] = useState("Save Value");
//   const changeValue = () => {
//     setValue("Revert Value");
//   };

//   return (
//     <>
//       <H1>Super Converter</H1>
//       <Select onChange={onSelect}>
//         <option value="0">Select an option</option>
//         <option value="1">Minutes & Hours</option>
//         <option value="2">KM & Mile</option>
//         <option value="3">mg/dL & mmoll/L</option>
//       </Select>
//       {index === "1" ? <Minutes /> : null}
//       {index === "2" ? <Km /> : null}
//       {index === "3" ? <Mgdl /> : null}

//       <Btn test={value} testFn={changeValue} />
//       <Btn test="no need render" />

//       <hr />
//       <Cleanup />
//     </>
//   );
// }

function CoinList() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [coinValue, setCoinValue] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onCoinChange = (event) => setCoinValue(event.target.value);
  const onChangeIndex = (event) => setIndex(event.target.value);
  const onAmountChange = (event) => setAmount(event.target.value);
  const onReset = () => setAmount(0);
  const onFlip = () => setFlipped((current) => !current);
  const onSubmit = (event) => event.preventDefault();

  console.log(amount);
  console.log(amount);
  // const Input = () => {
  //   return (
  //     <>
  //       <select value={index} onChange={onChangeIndex}>
  //         <option value="0">choose</option>
  //         <option value="1">dollar to coin</option>
  //         <option value="2">coin to dollar</option>
  //       </select>
  //       <br />
  //       <form onSubmit={onSubmit}>
  //         <label htmlFor="dollar">Dollar</label>
  //         <input
  //           value={index === "1" ? amount : coinValue * amount}
  //           onChange={onAmountChange}
  //           id="dollar"
  //           placeholder="Dollar"
  //           type="number"
  //           disabled={flipped}
  //         />
  //         <label htmlFor="coin">Coin</label>
  //         <input
  //           value={index === "1" ? coinValue * amount : amount }
  //           onChange={onAmountChange}
  //           id="coin"
  //           placeholder="Coin"
  //           type="number"
  //           disabled={!flipped}
  //         />
  //         <button>submit</button>
  //       </form>
  //     </>
  //   );
  // };

  const Select = () => {
    return (
      <>
        <select value={coinValue} onChange={onCoinChange}>
          <option value="1">choose coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price.toFixed(2)}>
              {coin.name} {coin.symbol}: ${coin.quotes.USD.price.toFixed(2)} USD
            </option>
          ))}
        </select>
      </>
    );
  };
  return (
    <>
      {loading ? (
        <strong>it is loading..</strong>
      ) : (
        <>
          <h1>The Coins list!!{coins.length}</h1>
          <hr />
        </>
      )}
      <Select />
      <hr />
      <>
        <select value={index} onChange={onChangeIndex}>
          <option value="0">choose</option>
          <option value="1">dollar to coin</option>
          <option value="2">coin to dollar</option>
        </select>
        <br />
        <form onSubmit={onSubmit}>
          <label htmlFor="dollar">Dollar</label>
          <input
            value={index === "1" ? amount : coinValue * amount}
            onChange={onAmountChange}
            id="dollar"
            placeholder="Dollar"
            type="number"
            disabled={flipped}
          />
          <label htmlFor="coin">Coin</label>
          <input
            value={index === "1" ? coinValue * amount : amount}
            onChange={onAmountChange}
            id="coin"
            placeholder="Coin"
            type="number"
            disabled={!flipped}
          />
          <button>submit</button>
        </form>
      </>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
      <Minutes />
    </>
  );
}

export default CoinList;
