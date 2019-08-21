import { combineReducers } from 'redux';
import houses from './houses';
import page from './page';
import characters from './characters';

export default combineReducers({ houses, page, characters });