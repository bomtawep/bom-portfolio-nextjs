import { combineReducers } from 'redux';
import { portfolioReducer } from './portfolio';

const reducers = combineReducers({
    ProductTypes: portfolioReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;