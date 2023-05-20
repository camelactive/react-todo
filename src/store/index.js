import {configureStore, combineReducers} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"
import storage from "redux-persist/lib/storage"
import {
    persistReducer,
    persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
    } from "redux-persist"

const persistConfig = {
 key :"root",
 storage : storage

}
const rootReducer = combineReducers({
    todo : todoReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
const persistor = persistStore(store)
export {persistor}
export default store