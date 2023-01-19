import { persistCombineReducers } from "redux-persist";
import { combineReducers, CombineReducers } from "redux";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers(
    {
        itemReducer: itemReducer,
        cartReducer: cartReducer
        // cartReducer : cartReducer
    }
)
export default rootReducer