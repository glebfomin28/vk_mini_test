import {configureStore} from "@reduxjs/toolkit";
import bankCoinsSlice from "./bankCoinsSlice_reducers";
import buyItemSlice from "./buyItemSlice_reducers";

export const store = configureStore({
    reducer: {
        bankCoins: bankCoinsSlice,
        item: buyItemSlice,
    },
});

