import { useDispatch, useSelector } from 'react-redux';
import classes from './Search.module.scss';
import type { RootState } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/filter/filterSlice';

export interface SearchProps {
    searchValue: string;
    setSearchValue: (e: string) => void;
}

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const { searchValue } = useSelector((state: RootState) => state.filter);
    return (
        <input
            value={searchValue}
            className={classes.input}
            type='text'
            placeholder='Введиет название'
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
    );
};

export default Search;
