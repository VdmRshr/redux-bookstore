import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import thunkMiddleware from 'redux-thunk';

//dispatch = next
//store = {getState, dispatch}    only that functions
const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action)
};

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             });
//         }
//         return originalDispatch(action)
//     };
//     return store;
// };


const store = createStore(reducer,applyMiddleware(thunkMiddleware,stringMiddleware) );

// const myAction=(dispatch)=>{
//     setTimeout(()=>dispatch({
//         type: 'DELAYED_ACTION'
//     }), 2000)
// };
// store.dispatch(myAction);

export default store;