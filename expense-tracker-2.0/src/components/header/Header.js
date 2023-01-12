import React, { useContext } from 'react'
import { GContext } from '../../ContextApi/Context'
import './header.css'
import convert from '../Currency'
const Header = () => {
  let {transactions} = useContext(GContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    );
  return (

    <div className='header'>
            <div className='income'>
          <p>income</p>
          <p>{convert(income)}</p>
        </div>
        <div className='expense'>
        <p>expense</p>
          <p>{convert(expense)}</p>
        </div>
    </div>
  )
}

export default Header