import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'


const coins = (props) => {
  return (
    <div className='container'>
      <div
      className='heading'>
        <p>#</p>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24 Hour</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Market Capital</p>
      </div>

      {props.coins.map(coins => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        )
      })}

    </div>
  )
}

export default coins