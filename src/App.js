import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import OrderCard from "./components/OrderCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationName, setReservationName] = useState('');

  const reservations = useSelector(state => state.reservations.value)
  const orders = useSelector(state => state.orders.value)

  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName))
    setReservationName('')
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
            {reservations.map((name, i) => <ReservationCard name={name} key={i}/>)}
            </div>
          </div>
          <div className="reservation-input-container">
          <input value={reservationName}
                onChange={(e) => setReservationName(e.target.value)}/>
                <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {orders.map((order, i) => {
            return <OrderCard key={i} order={order} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;