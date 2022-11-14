 
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { pageData } from '../../interface/interfaces'


export interface CardState {
  card: pageData;
  
}
const initialState: CardState = {
  card:{
    from:"",
    where:"",
    there:"",
    back:""
    }
  
  } as CardState
 

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {

    addCardItem: (state:CardState, action: PayloadAction<any>) => {
      state.card ={...action.payload}
     
    },
    
  },
})


export const {  addCardItem } = cardSlice.actions

export default cardSlice.reducer