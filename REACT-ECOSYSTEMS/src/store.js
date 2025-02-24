import {createStore, combineReducers, applyMiddleware} from 'redux';
//import { configureStore } from '@reduxjs/toolkit';
import { todos, isLoading } from './todos/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import persistReducer from 'redux-persist/lib/persistReducer';

const reducers = {
    todos,
    // isLoading
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducers = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
    );