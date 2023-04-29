import { useEffect, useState } from "react";
import styled from "styled-components";

function Cointracker() {
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [coinList, setCoinList] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [coinValue, setCoinValue] = useState(1);

  // const Container = styled.div`
  //   background-color: #bac8ff;
  // `;
  // const H1 = styled.h1`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // `;
  // const Loading = styled.div`
  //   display: flex;
  //   justify-content: center;
  // `;
  // const Input = styled.input`
  //   background-color: #e5dbff;
  // `;

  // const Button = styled.button`
  //   border: 0;
  //   background-color: #fcc2d7;
  //   border-radius: 10px;
  //   padding: 10px 20px;
  // `;

  // const Select = styled.select`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   text-align: center;
  //   background-color: #ffc9c9;
  //   border: 0;
  //   padding: 10px 20px;
  //   border-radius: 10px;
  // `;

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setLoading((current) => !current);
      });
  }, []);

  const onCAmount = (event) => setAmount(event.target.value);
  const onReset = () => setAmount(0);
  const onFlip = () => setFlipped((current) => !current);
  const onCIndex = (event) => setIndex(event.target.value);
  const onCCoin = (event) => setCoinValue(event.target.value);
  console.log(coinValue);
  console.log(coinValue / amount);
  return (
    <>
      {/* <Container> */}
      <h1>Coin Tracker {coinList.length}</h1>
      {/* <Loading> */}
      {loading ? <strong>Loading..</strong> : null}
      {/* </Loading> */}
      {/* </Container> */}

      <hr />
      <select value={coinValue} onChange={onCCoin}>
        <option value="0">choice coin</option>
        {coinList.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price.toFixed(2)}>
            {coin.name} ${coin.quotes.USD.price.toFixed(2)} USD
          </option>
        ))}
      </select>

      <hr />
      <select value={index} onChange={onCIndex}>
        <option value="0">Select</option>
        <option value="1">Dollar To Coin</option>
        <option value="2">Coin To Dollar</option>
      </select>
      {/* <form> */}
      <label htmlFor="dollar">Dollar</label>
      <input
        id="dollar"
        // value={amount}
        value={index === 1 ? amount : amount * coinValue}
        onChange={onCAmount}
        placeholder="Dollar"
        type="number"
        disabled={flipped}
      />
      <label htmlFor="coin">Coin</label>
      <input
        id="coin"
        // value={amount}
        value={index === 1 ? coinValue / amount : amount}
        onChange={onCAmount}
        placeholder="Coin"
        type="number"
        disabled={!flipped}
      />

      {/* </form> */}
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>Fliip</button>
    </>
  );
}

export default Cointracker;
