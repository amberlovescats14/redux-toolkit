import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      name: 'Amber',
      orders: ['pizza']
    }
  ]
}

export const orderSplice = createSlice(
  {
  name: "mem",
  initialState: initialState,
  reducers: {
    addPerson: (state, action) => {
      const { payload } = action
      state.value.push({name: payload, orders: []})
    },
    removePerson: (state, action) => {
      const { payload } = action
      const { index } = payload
      state.value.splice(index, 1)
    },
    addOrder: (state, action) => {
      const { payload } = action
      const { index, item } = payload
      state.value.forEach((order, i) => {
        if (i == index) order.orders.push(item)
      })
    },
    removeOrder: (state, action) => {
      const { payload } = action
      const { personIndex, itemIndex} = payload
      state.value.forEach((order, i) => {
        if (i == personIndex) {
          order.orders.splice(itemIndex,1)
        }
      })
    }
  }
})

export const { addPerson, removePerson, addOrder, removeOrder } = orderSplice.actions

export default orderSplice.reducer