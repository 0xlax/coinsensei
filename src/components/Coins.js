import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'

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
          <CoinItem coins={coins} />
        )
      })}

    </div>
  )
}

export default coins