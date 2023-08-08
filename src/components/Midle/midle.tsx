import {Left} from '../Left/left';
import {Content} from '../Content/content';
import './midle.css';

export interface MidleProps {
}

export const Midle = ({
}: MidleProps) => {
 
  return (
    <div className="midle">
      <Left/>    
      <Content/>     
    </div>
  );
}

