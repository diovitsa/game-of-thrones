import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers';
import housesApi from '../middlewares/housesApi';
import characterApi from '../middlewares/characterApi';

const enhancer = applyMiddleware(characterApi, housesApi);

export default createStore(reducer, enhancer);