import { createSlice } from '@reduxjs/toolkit';
import { SortState, QueryState, Ticket } from './types'
import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "../main";
import { newTickets,moreTickets } from '../mock'

const sortIntialState: SortState = {
    companies: [
        { id: '1', name: 'Win', checked: true, },
        { id: '2', name: 'Red wings', checked: true, },
        { id: '3', name: 'Airlines', checked: true, }
    ],
    transfers: {
        checked0: true,
        checked1: true,
        checked2: true,
        checked3: true,
    },
    variant: 'fast',
    header: 'Любая авиакомпания любое кол-во пересадок',
}

const queryIntialState: QueryState = {
    loading: false,
    tickets: [
        { key: 1, price: 136, start: new Date(2023, 3, 5, 12, 0, 0, 0), finish: new Date(2023, 3, 5, 16, 30, 0, 0), onRoad: '4 ч 30 мин', timeRoad: 16200000, companyLogo: 'Airlines', transferCount: 1, esteeme: 5 },
        { key: 2, price: 126, start: new Date(2023, 3, 5, 14, 0, 0, 0), finish: new Date(2023, 3, 5, 18, 30, 0, 0), onRoad: '4 ч 26 мин', timeRoad: 16020000, companyLogo: 'Red wings', transferCount: 3, esteeme: 2 },
        { key: 3, price: 120, start: new Date(2023, 3, 5, 18, 0, 0, 0), finish: new Date(2023, 3, 5, 20, 18, 0, 0), onRoad: '4 ч 18 мин', timeRoad: 15336000, companyLogo: 'Win', transferCount: 4, esteeme: 4 }
    ],
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
            const newTickets = action.payload.map((ticket: Ticket) => ({ ...ticket, }));
            newTickets.sort((a: Ticket, b: Ticket) => a.price > b.price ? 1 : -1);
            state.tickets = newTickets;
        },
        sortTime: (state, action) => {
            const newTickets = action.payload.map((ticket: Ticket) => ({ ...ticket, }));
            newTickets.sort((a: Ticket, b: Ticket) => a.timeRoad > b.timeRoad ? 1 : -1);
            state.tickets = newTickets;
        },
        sortOpnim: (state, action) => {
            const newTickets = action.payload.map((ticket: Ticket) => ({ ...ticket, }));
            newTickets.sort((a: Ticket, b: Ticket) => a.esteeme > b.esteeme ? 1 : -1);
            state.tickets = newTickets;
        },
        // queryResult: (state, action) => {
        //     const newTickets = action.payload.map((ticket: Ticket) => ({ ...ticket, }));
        //     state.tickets = newTickets;
        // },
        showLoading: (state, action) => {
            state.loading = action.payload;
        },


    },
    extraReducers: (builder) => {
        // обработка ошибок выполнения промежуточного действия queryThunk -  обращения к 
        console.log('queryThunk');
        builder.addCase(queryThunk.fulfilled, (state, action) => {
            console.log('fulfilled', state, action);
        })
        builder.addCase(queryThunk.rejected, (state, action) => {
            console.log('rejected', state, action)

        })
        builder.addCase(queryThunk.pending, (state, action) => {
            console.log('pending', state, action);

        })
    },
})

// запрос делаем в каждый момент изменения отбора компаний и пересадок
interface UserData {
    // transfers: Transfers,
    // companies: Company[],
    variant: string,
    loadmore: boolean,
}

export const queryThunk = createAsyncThunk<
    // Ticket[],
    void,
    UserData,
    {
        dispatch: AppDispatch,
        state: RootState
    }
>
    ("query/queryApi", async ({ variant, loadmore }, thunkApi) => {
        const dispatch = thunkApi.dispatch;
        const sortState = thunkApi.getState().sortSlices;
        const queryState = thunkApi.getState().querySlices;

        const transfers1 = sortState.transfers;
        const companies1 = sortState.companies;
        //  transfers, companies -  параметры запроса АПИ   
        //  я их беру из слайса а на входе оставлю себе на будущее как пример на память
        //   variant -  параметр сортировки                      

        //   Запрос если loadmore -  тогда делаем запрос на следующую порцию и добавим к имеющейся
        //   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        //   ответ - массив билетов
        //   const newTickets = await response.json();
        // имитация что загрузили  лежит в файле mock (newTickets - получили)
        // имитация что ДОгрузили билеты  лежит в файле mock (moreTickets - получили)
        let rawTickets:Ticket[] = [];
        if (loadmore) {
            rawTickets  = queryState.tickets.concat(moreTickets);
        }
        else{
            rawTickets  = newTickets;
        }

        // отбор  как бы параметры запроса
        const resultTickets = rawTickets.filter((ticket) => {
            let transfer = false;
          
            if (!transfers1.checked0
                && !transfers1.checked1
                && !transfers1.checked2
                && !transfers1.checked3
            ) transfer = false;
            else if (ticket.transferCount === 0) transfer = transfers1.checked0
            else if (ticket.transferCount === 1) transfer = transfers1.checked1
            else if (ticket.transferCount === 2) transfer = transfers1.checked2
            else if (ticket.transferCount === 3) transfer = transfers1.checked3

            return (transfer && companies1.find((element) => (element.name === ticket.companyLogo))?.checked)
        });

        // имитация задержки
        setTimeout(() => {
            // сортировка
            switch (variant) {
                case 'chip':
                    dispatch(sortPrice(resultTickets))
                    break;
                case 'fast':
                    dispatch(sortTime(resultTickets))
                    break;
                case 'optim':
                    dispatch(sortOpnim(resultTickets))
                    break;
                default:
            }
            // отменяю показ колесика загрузки
            dispatch(showLoading(false));
        }, 1000);

    },
    );

export const { setVariant1, setTransfers1, setCompanies1, setHeader } = sortSlices.actions;
export const { sortPrice, sortTime, sortOpnim, showLoading } = querySlices.actions;
export { sortSlices, querySlices };