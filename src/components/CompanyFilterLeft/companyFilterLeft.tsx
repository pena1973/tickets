import { useSelector } from "react-redux";
import "./companyFilterLeft.css";
import { RootState, useAppDispatch } from "../../main";
import { setCompanies1, setHeader, queryThunk,showLoading } from '../../redux/slices';
import { CreateTxt } from "../utils";


export interface CompanyFilterLeftProps {
  setting: string,
}

export const CompanyFilterLeft = ({
  setting,  
}: CompanyFilterLeftProps) => {

  const companies = useSelector((state: RootState) => {
    return state.sortSlices.companies;
  })
  const transfers = useSelector((state: RootState) => {
    return state.sortSlices.transfers;
  })

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inp = e.target as HTMLInputElement;

    const newCompanies = companies.map((company) => ({
      ...company,
      checked: (company.id === inp.id) ? !company.checked : company.checked
    }));

    // положть в редукс отбор    
    dispatch(setCompanies1(newCompanies));
    dispatch(setHeader(CreateTxt(transfers, newCompanies)));  
    // запросить с сайта в соответствие с настройками
    dispatch(showLoading(true));  
    dispatch(queryThunk({transfers,companies}));  
  }

  let companyReactNodes = companies.map(element => (
    <label className="container-company" key={element.id}>{element.name}
      <input id={element.id} type="checkbox" onChange={(e) => handleChange(e)} checked={element.checked} name={element.id}></input>
      <span className="checkmark"></span>
      <span className="checkmark1"></span>
    </label>

  ))

  if (setting === 'V1') {

    return (
      <div className="layout-left-companies_V1">
        <div className="layout-left-companies-header_V1">Компании</div>
        {/* <!-- чекБокс компании --> */}
        <div className="container-companies">
          {companyReactNodes}
        </div>
      </div>
    );
  } else {
    return (
      <div className="layout-left-companies_V2">
        <div className="layout-left-transfer-header_V2">Компании</div>
        {/* <!-- чекБокс компании --> */}
        <div className="container-companies">
          {companyReactNodes}
        </div>
      </div>
    )
  }
}

