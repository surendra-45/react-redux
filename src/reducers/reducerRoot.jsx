import PostReducers from './reducerPost';
import { combineReducers } from 'redux';

const RootReducers = combineReducers({
    login:PostReducers
})

export default RootReducers;