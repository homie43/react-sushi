import React from 'react';

export interface CategoriesProps {
    categoryId: number;
    changeCategory: (index: number) => void; // setCategoryId ничего не возвращает, по этому и void
}

const categories = ['Все', 'Классические', 'Запечёные', 'Вегетаринаские'];

const Categories: React.FC<CategoriesProps> = ({
    categoryId,
    changeCategory,
}) => {
    return (
        <div className='categories'>
            <ul>
                {categories.map((item, index) => (
                    <li
                        className={categoryId === index ? 'active' : ''}
                        key={index}
                        onClick={() => changeCategory(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
