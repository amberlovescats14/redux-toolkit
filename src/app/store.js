import {configureStore} from '@reduxjs/toolkit'
import reservationsReducer from '../features/reservationSlice'
import ordersReducer from '../features/orderSlice'

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    orders: ordersReducer
  }
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;