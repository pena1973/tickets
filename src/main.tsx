import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'

import thunkMiddleware from 'redux-thunk'

import {sortSlices} from './redux/slices.tsx';
import {querySlices} from './redux/slices.tsx';

export const rootReducer = combineReducers({    
    sortSlices: sortSlices.reducer,
    querySlices: querySlices.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,  
)

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// const store = createStore(rootReducer, applyMiddleware(thunk),
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// );


// import thunkMiddleware from 'redux-thunk'
// const rootReducer = combineReducers({})
// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
// })

// import {error} from './redux/slices'
// export  function мyMidleWare(store:any){
//     console.log('MyMidleWare1');    
//     return store.dispatch(error(true));              
// }

// const store = configureStore({
//     reducer: 
//     {
//       sortSlices: sortSlices.reducer,
//       querySlices: querySlices.reducer,
//     },      
//     // middleware: getDefaultMiddleware =>
//     // getDefaultMiddleware({
//     //   thunk: {        
//     //     extraArgument: {
//     //       api: 'myCustomApiService',
//     //       otherValue: 42
//     //     }, 
//     //   }
//     // }).concat(MyMidleWare)

//      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(мyMidleWare)
// });
