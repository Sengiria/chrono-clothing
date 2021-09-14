import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
import rootreducers from './root-reducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./root.saga";

const sagaMiddleWare = createSagaMiddleWare()

const middleware = [sagaMiddleWare]

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

export const store = createStore(rootreducers, applyMiddleware(...middleware))

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)

