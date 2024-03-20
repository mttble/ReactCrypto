import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CryptocurrencyInfo {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

const Home: React.FC = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptocurrencyInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      setCryptocurrencies(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '90%', margin: 'auto', marginTop: '50px' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptocurrencies.map((crypto) => (
              <tr key={crypto.id}>
                <td><img src={crypto.image} alt={crypto.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol.toUpperCase()}</td>
                <td>${crypto.current_price}</td>
                <td>${crypto.market_cap}</td>
                <td>{crypto.price_change_percentage_24h}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;