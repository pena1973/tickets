export const QUERY = 'QUERY';
export const SET_VARIANT = 'SET_VARIANT';
export const SET_TRANSFERS = 'SET_TRANSFERS';
export const SET_COMPANIES = 'SET_COMPANIES';

     
//   состояние квери редюсора
export type QueryState = {
    loading: boolean,
    tickets: Ticket[],    
  }

//   состояние сорт редюсора
  export type SortState = {
    companies: Company[],    
    transfers: Transfers,        
    variant: string,
    header:string
  }
   
export interface Transfers {
    checked0: boolean,
    checked1: boolean,
    checked2: boolean,
    checked3: boolean,
}
export interface Company {
    id:string,
    name: string,
    checked: boolean,
}

export interface Ticket {
  key:number;
  price: number;
  start: Date;
  finish: Date;
  onRoad: string;
  timeRoad: number;
  companyLogo: string;
  transferCount: number;
  esteeme: number;  // оценка оптимальности
   
}

