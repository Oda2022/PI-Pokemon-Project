import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = (
    typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

