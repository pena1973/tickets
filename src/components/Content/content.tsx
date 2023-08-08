
import { VariantsContent } from "../VariantsContent/variantsContent";
import { FilterContent } from "../FilterContent/filterContent";
import { Offer } from "../Offer/offer";
import './content.css';

export interface ContentProps {
}

export const Content = ({
}: ContentProps) => {
  
  return (
    <div className="content-panel">
    <VariantsContent/>  
    <FilterContent/>  
    <Offer  price={12680} start={new Date(2023, 3, 5, 12, 0, 0, 0)}  finish={new Date(2023, 3, 5, 16, 30, 0, 0)}  onRoad ={'4 ч 30 мин'}  companyLogo={'airlines'}  transferCount={1}/>
    <Offer  price={12680} start={new Date(2023, 3, 5, 12, 0, 0, 0)}  finish={new Date(2023, 3, 5, 16, 30, 0, 0)}  onRoad ={'4 ч 30 мин'}  companyLogo={'red_wings'}  transferCount={1}/>
    <Offer  price={12680} start={new Date(2023, 3, 5, 12, 0, 0, 0)}  finish={new Date(2023, 3, 5, 16, 30, 0, 0)}  onRoad ={'4 ч 30 мин'}  companyLogo={'win'}  transferCount={1}/>
    
    </div>
  );
}

