import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
const Shop = () => {
    const dispatch = useDispatch()
    const { WithdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
    return (
        <div className="container ">
            <h1>Add Data</h1>
            <button className="btn btn-primary mx-4" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}> + </button>
            Add item to Cart
            <button className="btn btn-primary mx-3" onClick={() => { WithdrawMoney(100) }}> - </button>
        </div>
    )
}
export default Shop