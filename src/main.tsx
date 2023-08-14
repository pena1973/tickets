import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
// import React from 'react';
import { configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'


// const store = createStore(rootReducer, applyMiddleware(thunk),
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// );




import {sortSlices} from './redux/slices.tsx';
import {querySlices} from './redux/slices.tsx';

const store = configureStore({
    reducer: 
    {
      sortSlices: sortSlices.reducer,
      querySlices: querySlices.reducer,
    },      
    middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,

  
)
