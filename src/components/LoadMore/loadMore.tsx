
import { useSelector} from "react-redux";
import { RootState,useAppDispatch} from "../../main";
import "./loadMore.css";
import { queryThunk} from '../../redux/slices';
export interface LoadMoreProps {  
}

export const LoadMore = ({

}: LoadMoreProps) => {
  const dispatch = useAppDispatch();
  
  const variant = useSelector((state: RootState) => {
    return state.sortSlices.variant;
  })
  
  const handleClick = () => {
    
    let loadmore = true;
    dispatch(queryThunk({variant,loadmore}));  

     }

  return (
    
    <div className="more-tickets" onClick={handleClick}>
    Загрузить еще билеты </div>
  );
}
