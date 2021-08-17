import { createStore, combineReducers } from 'redux';
import bascketReducer from './../reducer/bascketReducer'
import productsReducer from './../reducer/productsReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = {
    bascketReducer: bascketReducer,
    productsReducer: productsReducer
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))


const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;