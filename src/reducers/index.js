import {combineReducers} from 'redux';
import topUSReducer from './topUS';
import singleNewsReducer from './singleNews';

const rootReducer = combineReducers({
    topUS: topUSReducer,
    singleNews: singleNewsReducer
});

export default rootReducer;