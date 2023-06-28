import React, { useState, useEffect } from 'react';
import { FaCubes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Navbar.css';

const Navbar = () => {
  const [coinPrices, setCoinPrices] = useState([]);

  useEffect(() => {
    // Fetch coin prices from CoinGecko API
    const fetchCoinPrices = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd'
        );
        setCoinPrices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoinPrices();
  }, []);

  const renderCoinPrices = () => {
    return Object.entries(coinPrices).map(([coinId, coinData]) => {
      return (
        <span key={coinId} className="coin-price">
          {coinId}: ${coinData.usd}
        </span>
      );
    });
  };

  return (
    <Link to="/" className="navbar">
      <div className="coin-prices-container">
        <h1>
          <span className="highlighted-name">
            <span>Coin </span>
            <span className="purple">Sensei</span>
          </span>
        </h1>
      </div>
    </Link>
  );
  
  
};

export default Navbar;
