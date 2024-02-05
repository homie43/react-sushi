import classes from './Search.module.scss';

export interface SearchProps {
    searchValue: string;
    setSearchValue: (e: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
    return (
        <input
            value={searchValue}
            className={classes.input}
            type='text'
            placeholder='Введиет название'
            onChange={(e) => setSearchValue(e.target.value)}
        />
    );
};

export default Search;
