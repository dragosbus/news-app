import {combineReducers} from 'redux';
import topUSReducer from './topUS';

const rootReducer = combineReducers({
    topUS: topUSReducer
});

export default rootReducer;