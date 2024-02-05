import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import axios from 'axios';
import Skeleton from '../components/Skeleton';
import { useSelector } from 'react-redux';
import { changeCategoryId } from '../redux/slices/filter/filterSlice';
import { useAppDispatch } from '../redux/store';
import type { RootState } from '../redux/store';

export interface Sushi {
    id: number;
    title: string;
    describe: string;
    price: number;
    imageUrl: string;
    category: number;
    rating: number;
}

const Home = () => {
    const dispatch = useAppDispatch();
    const [items, setItems] = React.useState<Sushi[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    // выбор категории
    const { categoryId, sortValue } = useSelector(
        (state: RootState) => state.filter
    );
    const onChangeCategory = (idx: number) => {
        dispatch(changeCategoryId(idx));
    };

    React.useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const itemsRespone = await axios.get(
                    `https://79468735656e78dd.mokky.dev/items?${
                        categoryId > 0 ? `category=${categoryId}` : ''
                    }&sortBy=${sortValue.sortProp}`
                );
                setItems(itemsRespone.data);
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе данных');
                console.log(error);
                setIsLoading(true);
            }
        }
        fetchData();
    }, [categoryId, sortValue.sortProp]); // при первом рендере отрабоает useEffect

    const skeletons = [...new Array(4)].map((_, index) => (
        <Skeleton key={index} />
    )); // рендер фейкового массива

    const sushis = items.map((sushi) => (
        <SushiBlock key={sushi.id} {...sushi} />
    ));

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    categoryId={categoryId}
                    changeCategory={onChangeCategory}
                />
                <Sort sortValue={sortValue} />
            </div>
            <h2 className='content__title'>Все роллы</h2>
            <div className='content__items'>
                {isLoading ? skeletons : sushis}
            </div>
        </div>
    );
};

export default Home;
