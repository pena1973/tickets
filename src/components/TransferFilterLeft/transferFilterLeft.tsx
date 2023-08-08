import { useState } from "react";
import "./transferFilterLeft.css";

export interface TransferFilterLeftProps {
  setting: string,
}

export const TransferFilterLeft = ({
  setting,

}: TransferFilterLeftProps) => {

  const [checked0, setchecked0] = useState(false);
  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {

    let inp = e.target as HTMLInputElement;    
    switch (inp.id) {
      case '0':
        setchecked0(inp.checked);
        break;
      case '1':
        setchecked1(inp.checked);
        break;
      case '2':
        setchecked2(inp.checked);
        break;
      case '3':
        setchecked3(inp.checked);
        break;
      default:
    }
    // положть в редукс
  }

  // let checked = true;
  if (setting === 'V1') {
    return (
      <div className="layout-left-transfer_V1">
        <div className="layout-left-transfer-header_V1">Количество пересадок</div>
        {/* <!-- чекБокс пересадки --> */}
        <label className="container-transfer">Без пересадок
          <input id='0' type="checkbox" checked={checked0} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">1 пересадка
          <input id='1' type="checkbox" checked={checked1} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">2 пересадки
          <input id='2' type="checkbox" checked={checked2} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">3 пересадки
          <input id='3' type="checkbox" checked={checked3} onClick={(e) => handleClick(e)}></input>
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
          <input id='0' type="checkbox" checked={checked0} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">1 пересадка
          <input id='1' type="checkbox" checked={checked1} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">2 пересадки
          <input id='2' type="checkbox" checked={checked2} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
        <label className="container-transfer">3 пересадки
          <input id='3' type="checkbox" checked={checked3} onClick={(e) => handleClick(e)}></input>
          <span className="checkmark-transfer"></span>
        </label>
      </div>
    )
  }
}

