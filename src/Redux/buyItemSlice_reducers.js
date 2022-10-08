import {createSlice} from "@reduxjs/toolkit";
import defaultState from "./defState";

const buyItemSlice = createSlice({
    name: "BUY_ITEM",
    initialState: {
        itemList: defaultState.itemList
    },

    reducers: {
        purchaseItem: (state = defaultState, action) => {
            state.itemList[action.payload].price += 25;
        }
    }
})


export const {purchaseItem} = buyItemSlice.actions;
export default buyItemSlice.reducer;
