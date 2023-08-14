import { useDispatch, useSelector } from "react-redux";
import "./transferFilterLeft.css";
import { RootState} from "../../main";
import { setTransfers1,setHeader} from '../../redux/slices';
import { CreateTxt } from "../utils";

export interface TransferFilterLeftProps {
  setting: string,
};

export const TransferFilterLeft = ({
  setting,  
}: TransferFilterLeftProps) => { 

  const transfers = useSelector((state:RootState) => {    
     return state.sortSlices.transfers;     
})

const companies = useSelector((state: RootState) => {
  return state.sortSlices.companies;
})

 const dispatch = useDispatch();  
 
  const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTransfers = {
      checked0: transfers.checked0,
      checked1: transfers.checked1,
      checked2: transfers.checked2,
      checked3: transfers.checked3
    };

    let inp = e.target as HTMLInputElement;
    switch (inp.id) {
      case '0':
        newTransfers.checked0 = !newTransfers.checked0;
    
        break;
      case '1':
        newTransfers.checked1 = !newTransfers.checked1;
    
        break;
      case '2':
        newTransfers.checked2 = !newTransfers.checked2;
    
        break;
      case '3':
        newTransfers.checked3 = !newTransfers.checked3;
    
        break;
      default:
    }
    console.log('newTransfers', newTransfers);

    // положть в редукс отбор
    dispatch(setTransfers1(newTransfers));
    dispatch(setHeader(CreateTxt(newTransfers, companies)));
  }
  // let checked = true;
  if (setting === 'V1') {
    return (
      <div className="layout-left-transfer_V1">
        <div className="layout-left-transfer-header_V1">Количество пересадок</div>
        {/* <!-- чекБокс пересадки --> */}
        <label className="container-transfer">Без пересадок
          <input id='0' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked0} ></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">1 пересадка
          <input id='1' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked1}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">2 пересадки
          <input id='2' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked2}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">3 пересадки
          <input id='3' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked3}></input>
          <span className="checkmark-transfer"></span>
        </label>
      </div>)
  }
  else {
    return (
      <div className="layout-left-transfer_V2">
        <div className="layout-left-transfer-header_V2">Количество пересадок</div>
        {/* <!-- чекБокс пересадки --> */}

        <label className="container-transfer">Без пересадок
          <input id='0' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked0}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">1 пересадка
          <input id='1' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked1}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">2 пересадки
          <input id='2' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked2}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">3 пересадки
          <input id='3' type="checkbox" onChange = {(e)=>handleChange(e)} checked={transfers.checked3}></input>
          <span className="checkmark-transfer"></span>
        </label>
      </div>
    )
  }
}

