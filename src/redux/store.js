import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
import rootreducers from './root-reducer';

const middleware = [logger]

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

export const store = createStore(rootreducers, applyMiddleware(...middleware))

export const persistor = persistStore(store)

