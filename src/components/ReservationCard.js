import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';


const ReservationCard = (props) => {
  const { name, id } = props

  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(removeReservation(id))
  }
  return (
    <div 
    className="reservation-card-container"
    onClick={handleDelete}>
      {name}
    </div>
  );
}

export default ReservationCard;
