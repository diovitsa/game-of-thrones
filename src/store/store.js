import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers';
import api from '../middlewares/api';

const enhancer = applyMiddleware(api);

export default createStore(reducer, enhancer);