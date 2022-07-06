import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);

  //

  function onChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div>
      <h1>The Coins! 🤑 {loading ? "" : coins.length}개</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => {
            return (
              <option key={coin.id}>
                {coin.name} -{coin.symbol}(#{coin.rank}) :
                {Math.round(coin.quotes.USD.price)}$ [
                {amount / coin.quotes.USD.price}]
              </option>
            );
          })}
        </select>
      )}

      <input
        onChange={onChange}
        placeholder="몇 달러?"
        value={amount}
        type="number"
      />
    </div>
  );
}

export default App;
