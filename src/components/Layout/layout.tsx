import {Header} from '../Header/header';
import {Midle} from '../Midle/midle';
import "./layout.css";


export interface LayoutProps {  
}

export const Layout = ({

}: LayoutProps) => {
  return (
    <div className="layout">
      <Header/>          
      <Midle/>                
    </div>
  );
}
