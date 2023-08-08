import { useState } from "react";
import "./companyFilterLeft.css";

export interface CompanyFilterLeftProps {
  setting: string,  
  // checked1 : boolean,
  // checked2 : boolean,
  // checked3 : boolean,  
}

export const CompanyFilterLeft = ({
  setting,  
  // checked1,
  // checked2,
  // checked3,

}: CompanyFilterLeftProps) => {

  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {

    let inp = e.target as HTMLInputElement;    
    switch (inp.id) {
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
  
  if (setting === 'V1') {
    return (
      <div className="layout-left-companies_V1">
        <div className="layout-left-companies-header_V1">Компании</div>
        {/* <!-- чекБокс компании --> */}
        <div className="container-companies">
          <label className="container-company">Победа
            <input id='1' type="checkbox" checked={checked1} onClick={(e) => handleClick(e)} name="radio"></input>
            <span className="checkmark"></span>
            <span className="checkmark1"></span>
          </label>
          <label className="container-company">Red Wings
            <input id='2' type="checkbox" checked={checked2} onClick={(e) => handleClick(e)} name="radio"></input>
            <span className="checkmark"></span>
            <span className="checkmark1"></span>
          </label>
          <label className="container-company">S7 Airlines
            <input id='3' type="checkbox" checked={checked3} onClick={(e) => handleClick(e)} name="radio"></input>
            <span className="checkmark"></span>
            <span className="checkmark1"></span>
          </label>

        </div>
      </div>
    );
  } else {
    return (
      <div className="layout-left-companies_V2">
        <div className="layout-left-transfer-header_V2">Компании</div>
        {/* <!-- чекБокс компании --> */}
        <div className="container-companies">
          <label className="container-company">Победа
            <input id='1' type="checkbox" checked={checked1} onClick={(e) => handleClick(e)} name="radio"></input>
              <span className="checkmark"></span>
              <span className="checkmark1"></span>
          </label>
          <label className="container-company">Red Wings
            <input id='2' type="checkbox" checked={checked2} onClick={(e) => handleClick(e)} name="radio"></input>
              <span className="checkmark"></span>
              <span className="checkmark1"></span>
          </label>
          <label className="container-company">S7 Airlines
            <input id='3' type="checkbox" checked={checked3} onClick={(e) => handleClick(e)} name="radio"></input>
              <span className="checkmark"></span>
              <span className="checkmark1"></span>
          </label>
        </div>
      </div>
    )
  }
}

