import {createSlice} from "@reduxjs/toolkit";
import defaultState from "./defState";


const bankCoinsSlice = createSlice({
    name: "BANK_COINS",
    initialState: {
        bankCoinNum: 50000
    },
    reducers: {
        coinReduction: (state = defaultState, action) => {
            state.bankCoinNum -= action.payload
        }
    }
})

export const {coinReduction} = bankCoinsSlice.actions;
export default bankCoinsSlice.reducer;
