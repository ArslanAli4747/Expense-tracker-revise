import React, { useContext } from 'react'
import { GContext } from '../../ContextApi/Context'
import "./body.css"
import Display from './Display'

const Body = () => {
  const {transactions} = useContext(GContext)

  return (
    <div className='body'>
    {
      transactions.map(trans=>(
        <Display key={trans.id} transaction={trans} />
      ))
}
    </div>
  )
}

export default Body