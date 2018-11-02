import {combineReducers} from 'redux';
import {topUSReducer} from './topUS';
import {singleNewsReducer} from './singleNews';
import {getSourcesReducer} from './sources';

const rootReducer = combineReducers({
    topUS: topUSReducer,
    singleNews: singleNewsReducer,
    sources: getSourcesReducer
});

export default rootReducer;