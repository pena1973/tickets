import { TransferFilterLeft } from '../TransferFilterLeft/transferFilterLeft';
import { CompanyFilterLeft } from '../CompanyFilterLeft/companyFilterLeft';
import './left.css';


export interface LeftProps {
}

export const Left = ({
}: LeftProps) => {
 
  return (
    <div className="left-panel">
      <TransferFilterLeft setting={'V1'}/>
      <CompanyFilterLeft setting={'V1'} />
    </div>
  );
}

