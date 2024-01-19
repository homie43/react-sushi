import React from 'react';
import { SortPropertyEnum } from '../types/types';

export interface SortProps {
    sortValue: SortItem;
    setSortValue: (obj: SortItem) => void;
}

export interface SortItem {
    name: string;
    sortProp: SortPropertyEnum;
}

const sortList: SortItem[] = [
    { name: 'популярности 👆', sortProp: SortPropertyEnum.RATING },
    { name: 'цене 👆', sortProp: SortPropertyEnum.PRICE },
];

const Sort: React.FC<SortProps> = ({ sortValue, setSortValue }) => {
    const [open, setOpen] = React.useState(false); // popup окно

    const onClickSort = (obj: SortItem) => {
        setSortValue(obj);
        setOpen(false);
    };

    return (
        <div className='sort'>
            <div className='sort__label'>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{sortValue.name}</span>
            </div>
            {open && (
                <div className='sort__popup'>
                    <ul>
                        {sortList.map((obj, index) => (
                            <li
                                key={index}
                                className={
                                    sortValue.sortProp === obj.sortProp
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => onClickSort(obj)}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
