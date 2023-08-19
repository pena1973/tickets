
import { VariantsContent } from "../VariantsContent/variantsContent";
import { FilterContent } from "../FilterContent/filterContent";
import { Offer } from "../Offer/offer";
import './content.css';
import { useSelector} from "react-redux";
import { RootState} from "../../main";
import {Loader} from "../Loader/loader"
import {LoadMore} from "../LoadMore/loadMore"
export interface ContentProps {
}

export const Content = ({
}: ContentProps) => {

  const tickets = useSelector((state:RootState) => {    
    return state.querySlices.tickets;     
})

const loading = useSelector((state:RootState) => {    
  return state.querySlices.loading;     
})


  let ticketReactNodes = tickets.map(element => (
    <Offer key={element.key} price={element.price} start={element.start}  finish={element.finish}  onRoad ={element.onRoad}  companyLogo={element.companyLogo}  transferCount={element.transferCount}/>
  ))

  return (
    <div className="content-panel">
    <VariantsContent/>  
    <FilterContent/>  
    {loading && <Loader/>}
    {!loading && ticketReactNodes}
    <LoadMore/>
    </div>
  );
}

