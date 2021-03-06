import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore() {
  const loggerMiddleware = createLogger();
  // const middlewares = [thunkMiddleware].filter(Boolean);
  const middlewares = [thunkMiddleware, loggerMiddleware].filter(Boolean);
  const middleWare = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middleWare);
  return store;
}
