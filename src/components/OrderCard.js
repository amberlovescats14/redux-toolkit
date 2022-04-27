import React from 'react'

export default function OrderCard(props) {
  const { key, order } = props
  const { name, orders } = order
  
  return (
    <div className="customer-food-card-container">
    <p>{name}</p>
    <div className="customer-foods-container">
      {orders.map(item => <div className="customer-food">{item}</div>)}
      <div className="customer-food-input-container">
      <input />
    <button >Add</button>
      </div>
    </div>
  </div>
  )
}
