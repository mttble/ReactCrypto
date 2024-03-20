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
        cryptocurrencies.slice(0, 10).map((crypto) => (
          <div key={crypto.id} style={{ maxWidth: '300px', maxHeight: '300px', margin: '10px' }}>
            <img src={crypto.image} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
            <h6>{crypto.name} ({crypto.symbol.toUpperCase()})</h6>
            <p>Price: ${crypto.current_price}</p>
            <p>Market Cap: ${crypto.market_cap}</p>
            <p>24h Change: {crypto.price_change_percentage_24h}%</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
