import React, { useContext } from 'react'
import { GContext } from '../../ContextApi/Context';
import convert from '../Currency';
const Display = ({transaction}) => {
  let {del} = useContext(GContext)
    return (
    <div className='item'>
    <p className='desc'>{transaction.choose}</p>
    <div className='price'>
      <p>{convert(transaction.amount)}</p>
      <button onClick={()=>{console.log(`id : ${transaction.id}`);
        del(transaction.id)}} className='btndel'>X</button>
    </div>
  

</div>
  )
}

export default Display