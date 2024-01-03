import React from 'react';

const categories = ['Все', 'Классические', 'Запечёные', 'Вегетаринаские'];

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <div className='categories'>
            <ul>
                {categories.map((item, index) => (
                    <li
                        className={activeIndex === index ? 'active' : ''}
                        key={index}
                        onClick={() => onClickCategory(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
