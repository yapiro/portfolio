import {combineReducers} from 'redux';
import {tweetReducer} from './tweetReducer';
import { showReducer } from './showReducer';

const rootReducer = combineReducers({
    tweets:tweetReducer,
    show:showReducer
});

export default rootReducer;