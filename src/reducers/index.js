import { combineReducers } from 'redux';

import { featureReducer } from './featureReducer';
import { carReducer } from './carReducer';

export const rootReducer = combineReducers({
    featureReducer,
    carReducer
});