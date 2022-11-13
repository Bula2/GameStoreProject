import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BestSellersState {
  bestSellersData: {
    id: number,
    src: string,
    title: string
  }[]
}

const initialState: BestSellersState = {
  bestSellersData: [
    {id: 1, src: "/img/cyberpank.png", title: "Cyberpunk 2077"},
    {id: 2, src: "/img/fifa22.png", title: "Fifa 22"},
    {id: 3, src: "/img/godOfWar.png", title: "God Of War"},
    {id: 4, src: "/img/spiderman.png", title: "Spider Man"}
  ]
}

export const bestSellersSlice = createSlice({
  name: 'bestSellers',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
// export const {} = bestSellersSlice.actions

export default bestSellersSlice.reducer