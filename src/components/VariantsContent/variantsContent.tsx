import { useDispatch, useSelector } from "react-redux";
import "./variantsContent.css";
// import { setVariant } from "../../redux/actions";
import { RootState } from "../../main";
import { setVariant1 } from '../../redux/slices';
import { sortPrice, sortTime, sortOpnim } from '../../redux/slices';

export interface VariantsContentProps {
}

export const VariantsContent = ({
}: VariantsContentProps) => {

  const tickets = useSelector((state: RootState) => {
    return state.querySlices.tickets;
  })
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {

    let div = e.target as HTMLDivElement;
    let parent = div.parentElement;

    for (let index = 0; index < 3; index++) {
      const child = parent?.children[index];
      child?.classList.remove('active');
    }
    const currentVariant = div.id;

    switch (div.id) {
      case 'chip':
        div.classList.add("active");
        dispatch(sortPrice(tickets))        
        break;
      case 'fast':
        div.classList.add("active");
        dispatch(sortTime(tickets))
        break;
      case 'optim':
        div.classList.add("active")
        dispatch(sortOpnim(tickets))
        break;
      default:
    }


    // здесь передать состояние переключателя в редукс  
    dispatch(setVariant1(currentVariant))
    // и потом сортировать перерисовать оферы
  }
  return (
    <div className="content-panel-variants">
      <div id="chip" className="content-panel-variant radius-left" onClick={(e) => handleClick(e)}> Самый дешевый </div>
      <div id="fast" className="content-panel-variant" onClick={handleClick}>Самый быстрый</div>
      <div id="optim" className="content-panel-variant radius-right" onClick={handleClick}> Самый оптимальный </div>
    </div>
  );
}

