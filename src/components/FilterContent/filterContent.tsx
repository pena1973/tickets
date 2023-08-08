import { useState } from "react";
import "./filterContent.css";
import { TransferFilterLeft } from "../TransferFilterLeft/transferFilterLeft";
import { CompanyFilterLeft } from "../CompanyFilterLeft/companyFilterLeft";
import arrowDown from "./images/arrow-down.svg";
import arrowUp from "./images/arrow-up.svg";

let transfers = {
  checked0: false,
  checked1: false,
  checked2: false,
  checked3: true,
}
let companys = [
  { company: 'Airlines', cheked: true },
  { company: 'Red wings', cheked: true },
  { company: 'Win', cheked: true },
]

// собираем строку заголовка фильтра
const CreateTxt = () => {
  let txt = '';
  // компании
  companys.forEach(element => {
    txt = txt + ((txt.length>0)?', ':' ') + ((element.cheked) ? element.company: '');
  });

  txt = (txt.length === 0 ? 'Любая авиакомпания ' : txt);

  // пересадки
  let txt1 = '';
  txt1 = txt1 + (transfers.checked0 ? ', ' : '')
  txt1 = txt1 + (transfers.checked0 ? 'без' : '')
  txt1 = txt1 + (transfers.checked1 ? ', ' : '')
  txt1 = txt1 + (transfers.checked1 ? '1' : '')
  txt1 = txt1 + (transfers.checked2 ? ', ' : '')
  txt1 = txt1 + (transfers.checked2 ? '2' : '')
  txt1 = txt1 + (transfers.checked3 ? ', ' : '')
  txt1 = txt1 + (transfers.checked3 ? '3' : '')
  
  txt1 = (txt1.length === 0 ? 'любое кол-во' : txt1);
  txt1 = (transfers.checked0 && transfers.checked1 && transfers.checked2 && transfers.checked3) ? 'любое кол-во' : txt1 ;

  let txt2 = '';
  txt2 = (transfers.checked0 ? ' пересадок' : txt2);
  txt2 = (transfers.checked1 ? ' пересадка' : txt2);
  txt2 = (transfers.checked2 ? ' пересадок' : txt2);
  txt2 = (transfers.checked3 ? ' пересадки' : txt2);
  txt2 = (transfers.checked3 ? ' пересадки' : txt2);
  txt2 = (txt2.length === 0 ?  ' пересадок' : txt2);

  txt2 = (transfers.checked0 && transfers.checked1 && transfers.checked2 && transfers.checked3) ? ' пересадок' : txt2 ;
  
  return txt + txt1 + txt2;

}

export interface FilterContentProps {
}

export const FilterContent = ({
}: FilterContentProps) => {
  const [arrow, setArrow] = useState(arrowUp);
  // Начальное состояние получить из редукс
  const [text, setText] = useState('Любая авиакомпания, любое кол-во пересадок');

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {

    const div = e.target as HTMLDivElement;
    // const parent1 = div.parentElement;
    const parent2 = div.parentElement?.parentElement;
    const parent3 = div.parentElement?.parentElement?.parentElement;

    const open = parent3?.children[parent3?.childElementCount - 1];
    open?.classList.toggle('none');
    parent2?.classList.toggle('border-bottom-radius');


    if (open?.classList.contains('none')) setArrow(arrowUp);
    else setArrow(arrowDown);
    //  вот эту часть потом надо вынести в обработку клика

    setText(CreateTxt());
    // здесь передать состояние переключателя в редукс

  }

  // здесь получить состояние из редукса и сформировать запись заголовка

  return (
    <div className="wrap-content-panel-filter" >
      <div className="content-panel-filter border-bottom-radius ">
        <div className="content-panel-filter-description">
          {text}
        </div>

        <div className="content-panel-filter-setting">
          <div className="content-panel-filter-setting-name" onClick={(e) => handleClick(e)} >Открыть настройки</div>
          <img className="content-panel-filter-setting-arrow" onClick={(e) => handleClick(e)} src={arrow} alt="arrow"></img>
        </div>
      </div>
      <div className="content-panel-filter-open none">
        {/* <!-- Количество пересадок--> */}
        <TransferFilterLeft setting={'V2'} />
        {/* <!-- Компании--> */}
        <CompanyFilterLeft setting={'V2'} />
      </div>
    </div>
  );
}

