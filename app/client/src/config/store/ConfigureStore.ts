import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import login from './../../view/Login/state';
import users from './../../view/Users/state';


const reduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
    const store = createStore(
        combineReducers({
            login,
            users
        }),
        reduxDevTool,
        applyMiddleware(
            thunk
        )
    );
    return store;
}
