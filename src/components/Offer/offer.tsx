import "./offer.css";
import airlines  from './images/airlines.svg';
import red_wings  from './images/red_wings.svg';
import win  from './images/the_win.svg';

export interface OfferProps {
  price: number,  
 
  start : Date,
  finish : Date,
  onRoad : string,
  companyLogo:string,
  transferCount:number,
}

export const Offer = ({
  price,  
 
  start ,
  finish,
  onRoad,
  companyLogo,
  transferCount,
}: OfferProps) => { 
  
  let src = '';
  switch (companyLogo) {
    case 'airlines':
      src = airlines;
      break;
    case 'red_wings':
      src = red_wings;
      break;
    case 'win':
      src = win;
      break;    
    default:
      src = '';
  }
 
  const options:Intl.DateTimeFormatOptions = {      
    hour: 'numeric',
    minute: 'numeric'
  }

   
  
  return (
    <div className="offer">

      <div className="offer-column1 radius-left">
        <div className="offer-column1-price">{price} Р</div>
        <div className="offer-column1-airport">SVO - LED </div>
        <div className="offer-column1-start-finish">{start.toLocaleString("ru", options)} - {finish.toLocaleString("ru", options)}</div>
      </div>
      <div className="offer-column2">
        <div className="offer-column2-on-road">В пути</div>
        <div className="offer-column2-time">{onRoad}</div>
      </div>

      <div className="offer-column3 radius-right">
        <img className="offer-column3-company-logo" src={src} alt="avatar"></img>
        <div className="offer-column3-transfer-name">Пересадки</div>
        <div className="offer-column3-transfer">{transferCount} пересадка</div>
      </div>
    </div>
  );
}

