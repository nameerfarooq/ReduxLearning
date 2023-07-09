import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from './store/index'
import { bindActionCreators } from 'redux'
const Shop = () => {

  const dispatch = useDispatch()
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <div>
        <button className="btn btn-primary mx-2" onClick={() => withdrawMoney(100)} >-</button>
        Add to Cart
        <button className="btn btn-primary mx-2" onClick={() => depositMoney(100)}>+</button>
      </div>
    </div>
  )
}

export default Shop