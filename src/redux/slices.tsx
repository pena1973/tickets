import { createSlice } from '@reduxjs/toolkit';
import { SortState, QueryState, Ticket,} from './types'
import { createAsyncThunk } from "@reduxjs/toolkit";



const sortIntialState: SortState = {
    companies: [
        { id: '1', name: 'Win', checked: false, },
        { id: '2', name: 'Red wings', checked: false, },
        { id: '3', name: 'Airlines', checked: false, }
    ],
    transfers: {
        checked0: false,
        checked1: false,
        checked2: false,
        checked3: false,
    },
    variant: 'fast',
    header: 'Любая авиакомпания любое кол-во пересадок',
}

const queryIntialState: QueryState = {
   loading: false,
    tickets: [
        {price:136, start:new Date(2023, 3, 5, 12, 0, 0, 0), finish:new Date(2023, 3, 5, 16, 30, 0, 0),  onRoad: '4 ч 30 мин', timeRoad:16200000, companyLogo:'airlines',  transferCount:1, esteeme: 5},
        {price:126, start:new Date(2023, 3, 5, 14, 0, 0, 0), finish:new Date(2023, 3, 5, 18, 30, 0, 0),  onRoad: '4 ч 26 мин', timeRoad:16020000, companyLogo:'red_wings', transferCount:3, esteeme: 2},
        {price:120, start:new Date(2023, 3, 5, 18, 0, 0, 0), finish:new Date(2023, 3, 5, 20, 18, 0, 0),  onRoad: '4 ч 18 мин', timeRoad:15336000, companyLogo:'win',       transferCount:4, esteeme: 4}        
    ],
    transfers: {
        checked0: false,
        checked1: false,
        checked2: false,
        checked3: false,
    },
    companies:[]
}

const sortSlices = createSlice({
    name: 'sort',
    initialState: sortIntialState,
    reducers: {
        setVariant1: (state, action) => {
            state.variant = action.payload;
        },
        setTransfers1: (state, action) => {
            state.transfers = action.payload;
        },
        setCompanies1: (state, action) => {
            state.companies = action.payload;
        },
        setHeader: (state, action) => {
            state.header = action.payload;
        },
    },
  
})

const querySlices = createSlice({
    name: 'query',
    initialState: queryIntialState,
    reducers: {      
        sortPrice: (state, action) => {            
            const newTickets = action.payload.map((ticket:Ticket) => ({ ...ticket, }));         
            newTickets.sort((a:Ticket, b:Ticket) => a.price > b.price ? 1 : -1);
            state.tickets = newTickets;
        },
        sortTime: (state, action) => {                        
            const newTickets = action.payload.map((ticket:Ticket) => ({ ...ticket, }));         
            newTickets.sort((a:Ticket, b:Ticket) => a.timeRoad > b.timeRoad ? 1 : -1);
            state.tickets = newTickets;
            

        },
        sortOpnim: (state, action) => {  

            const newTickets = action.payload.map((ticket:Ticket) => ({ ...ticket, }));         
            newTickets.sort((a:Ticket, b:Ticket) => a.esteeme > b.esteeme ? 1 : -1);
            state.tickets = newTickets;            
        }, 
       queryApi: (state, action) => {  
            // const companies =  action.payload.companies;
            // const transfers =  action.payload.transfers;
            
            const newTickets = action.payload.map((ticket:Ticket) => ({ ...ticket, }));         
            // newTickets.sort((a:Ticket, b:Ticket) => a.esteeme > b.esteeme ? 1 : -1);
            state.tickets = newTickets;            
        }, 

    },   
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(queryThunk.fulfilled, (state, action) => {
          // Add user to the state array
        //   state.entities.push(action.payload)
        })
      },
})

// запрос делаем в каждый момент изменения отбора компаний и пересадок


  const queryThunk = createAsyncThunk(
    "queryApi", 
    async (transfers,companies) => {
        //  это параметры отбора запроса
    console.log(transfers,companies);
    //   const response = await fetch(
    //     `https://jsonplaceholder.typicode.com/todos`
    //   );
  
      // Get the JSON from the response:
    //   const data = await response.json();
      
      // Return result:
    //   return data;
      return  [
        {price:106, start:new Date(2023, 3, 6, 12, 0, 0, 0), finish:new Date(2023, 3, 6, 16, 30, 0, 0),  onRoad: '4 ч 30 мин', timeRoad:18200000, companyLogo:'airlines',  transferCount:1, esteeme: 3},
        {price:113, start:new Date(2023, 3, 5, 14, 0, 0, 0), finish:new Date(2023, 3, 5, 18, 30, 0, 0),  onRoad: '4 ч 26 мин', timeRoad:16020000, companyLogo:'red_wings', transferCount:3, esteeme: 5},
        {price:128, start:new Date(2023, 3, 5, 18, 0, 0, 0), finish:new Date(2023, 3, 5, 20, 18, 0, 0),  onRoad: '4 ч 18 мин', timeRoad:19336000, companyLogo:'win',       transferCount:4, esteeme: 4},        
        {price:136, start:new Date(2023, 3, 5, 12, 0, 0, 0), finish:new Date(2023, 3, 5, 16, 30, 0, 0),  onRoad: '4 ч 30 мин', timeRoad:16200000, companyLogo:'airlines',  transferCount:1, esteeme: 5},
        {price:126, start:new Date(2023, 3, 5, 14, 0, 0, 0), finish:new Date(2023, 3, 5, 18, 30, 0, 0),  onRoad: '4 ч 26 мин', timeRoad:16020000, companyLogo:'red_wings', transferCount:3, esteeme: 2},
        {price:120, start:new Date(2023, 3, 5, 18, 0, 0, 0), finish:new Date(2023, 3, 5, 20, 18, 0, 0),  onRoad: '4 ч 18 мин', timeRoad:15336000, companyLogo:'win',       transferCount:4, esteeme: 4},        
    ];
    }
  );

export const { setVariant1, setTransfers1, setCompanies1, setHeader } = sortSlices.actions;
export const {  sortPrice, sortTime, sortOpnim,queryApi } = querySlices.actions;

export { sortSlices, querySlices, queryThunk };