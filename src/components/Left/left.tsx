import { TransferFilter } from '../TransferFilter/transferFilter';
import { CompanyFilter } from '../CompanyFiltert/companyFilter';
import './left.css';


export interface LeftProps {
}

export const Left = ({
}: LeftProps) => {
 
  return (
    <div className="left-panel">
      <TransferFilter setting={'V1'}/>
      <CompanyFilter setting={'V1'} />
    </div>
  );
}

