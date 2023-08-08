import "./header.css";
import plain  from './images/plain.svg';

export interface HeaderProps {
}

export const Header = ({
}: HeaderProps) => {
  return (
    <div className="header">
        <img className="logo" src={plain} alt="avatar"></img>
        <h1 className="header-h1">Поиск авиабилетов</h1>
    </div>
  );
}
