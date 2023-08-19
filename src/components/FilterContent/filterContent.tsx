import { useState } from "react";
import "./filterContent.css";
import { TransferFilter } from "../TransferFilter/transferFilter";
import { CompanyFilter } from "../CompanyFiltert/companyFilter";
import arrowDown from "./images/arrow-down.svg";
import arrowUp from "./images/arrow-up.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../main";


export interface FilterContentProps {
}

export const FilterContent = ({
}: FilterContentProps) => {
 
  const header = useSelector((state: RootState) => {
    const {sortSlices} = state;
    return sortSlices.header;
  }) 
    
  const [arrow, setArrow] = useState(arrowUp);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {

    const div = e.target as HTMLDivElement;
    const parent2 = div.parentElement?.parentElement;
    const parent3 = div.parentElement?.parentElement?.parentElement;

    const open = parent3?.children[parent3?.childElementCount - 1];
    open?.classList.toggle('none');
    parent2?.classList.toggle('border-bottom-radius');

    if (open?.classList.contains('none')) setArrow(arrowUp);
    else setArrow(arrowDown);
  }

  return (
    <div className="wrap-content-panel-filter" >
      <div className="content-panel-filter border-bottom-radius ">
        <div className="content-panel-filter-description">
          {header}
        </div>

        <div className="content-panel-filter-setting">
          <div className="content-panel-filter-setting-name" onClick={(e) => handleClick(e)} >Открыть настройки</div>
          <img className="content-panel-filter-setting-arrow" onClick={(e) => handleClick(e)} src={arrow} alt="arrow"></img>
        </div>
      </div>
      <div className="content-panel-filter-open none">
        {/* <!-- Количество пересадок--> */}
        <TransferFilter setting={'V2'} />
        {/* <!-- Компании--> */}
        <CompanyFilter setting={'V2'}  />
      </div>
    </div>
  );
}

