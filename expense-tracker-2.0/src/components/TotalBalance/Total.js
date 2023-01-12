import React, { useContext } from 'react'
import { GContext } from '../../ContextApi/Context'
import "./total.css"
import convert from '../Currency'
const Total = () => {
    const {transactions} = useContext(GContext)
   const amount = transactions.map((transaction)=>(transaction.amount))
    // const current = amount.reduce((p,c)=>(p+=c),0)
    const totalamount =  amount.reduce((p,c)=>(p+=Math.abs(c)),0)

    const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
   return (
    <div className='total'>
        <div className='ta'>Total : {convert(totalamount)}</div>
        <div className='cur'>Current : {convert(income - expense)}</div>
  
    </div>
  
    )
}

export default Total