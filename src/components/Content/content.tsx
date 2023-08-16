
import { VariantsContent } from "../VariantsContent/variantsContent";
import { FilterContent } from "../FilterContent/filterContent";
import { Offer } from "../Offer/offer";
import './content.css';
import { useDispatch,useSelector} from "react-redux";
import { RootState} from "../../main";
import { queryThunk } from '../../redux/slices';
// import {  sortTime  } from '../../redux/slices';
export interface ContentProps {
}

export const Content = ({
}: ContentProps) => {

  const tickets = useSelector((state:RootState) => {    
    return state.querySlices.tickets;     
})

const companies = useSelector((state: RootState) => {
  return state.sortSlices.companies;
})
const transfers = useSelector((state: RootState) => {
  return state.sortSlices.transfers;
})

// const dispatch = useDispatch();
// dispatch(queryThunk(transfers,companies));


  let ticketReactNodes = tickets.map(element => (
    <Offer key={element.companyLogo} price={element.price} start={element.start}  finish={element.finish}  onRoad ={element.onRoad}  companyLogo={element.companyLogo}  transferCount={element.transferCount}/>
  ))

  return (
    <div className="content-panel">
    <VariantsContent/>  
    <FilterContent/>  
    {ticketReactNodes}
    </div>
  );
}

