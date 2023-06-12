import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/Filter/filterSlice';
import { selectFilter } from '../../redux/Contacts/selectors';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={filter}
    />
  );
}
