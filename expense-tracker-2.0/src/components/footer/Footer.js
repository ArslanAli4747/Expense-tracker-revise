import React, { useContext, useState } from 'react'
import { GContext } from '../../ContextApi/Context'
import "./footer.css"

const Footer = () => {
  let {add} = useContext(GContext)
  let [choose,setType] = useState('')
  let [amount,setAmount] = useState("")
  function addTrans(e){
    e.preventDefault()
    console.log(`amount ${amount} type ${choose}`);
    if (choose.length>0 && amount.length>0){
      if (choose === "income"){
      amount = + parseInt(amount)
      }
      else if(choose === "expense"){
        amount = - parseInt(amount)
        
      }
      let newTran = {
        id:Math.floor(Math.random()*300000),
        choose,
        amount: amount
      }
      add(newTran)
      setAmount("")
      setType("")
    }
    else{
      alert("please fill the required fields..")
    }
  }
  return (
    <div className='footer'>
      <div className='inptcon'>
        <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} className='inptamount' type="number" placeholder='Enter amount'>
        </input>
          <div className='label'>
          <label htmlFor="inex">choose type:</label>
          <select value={choose} onChange={(e)=>{setType(e.target.value)}} name="inex" id="inex">
          <option ></option>
          <option >income</option>
          <option >expense</option>
        </select>
          </div>
          <button onClick={addTrans} className='btnsub'>sumbit</button>
        
      </div>
    </div>
  )
}

export default Footer