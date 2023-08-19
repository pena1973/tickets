import "./loader.css";
import icon from  "./images/loader3.webp"
export interface Loader {

}

export const Loader = () => { 
  
 
  return (
    <div className="loader">
    <img className="img-loader"src={icon} alt="loader"></img>
    </div>
  );
}

