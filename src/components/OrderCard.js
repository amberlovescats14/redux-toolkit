import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOrder } from '../features/orderSlice'

export default function OrderCard(props) {
  const { id, order } = props
  const { name, orders } = order

  const [newOrder, setNewOrder] = useState('');

  const dispatch = useDispatch()
  const handleAddOrder = () => {
    if (!newOrder) return
    dispatch(addOrder({index: id, order: newOrder}))
  }
  console.log(orders);
  return (
    <div className="customer-food-card-container">
    <p>{name}</p>
    <div className="customer-foods-container">
      {orders.map(item => <div className="customer-food">{item}</div>)}
      <div className="customer-food-input-container">
      <input 
      value={newOrder}
      onChange={(e) => setNewOrder(e.target.value)}/>
    <button 
    onClick={handleAddOrder}>Add</button>
      </div>
    </div>
  </div>
  )
}
