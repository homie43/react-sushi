import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import axios from 'axios';
import Skeleton from '../components/Skeleton';

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
    const [items, setItems] = React.useState<Sushi[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const itemsRespone = await axios.get(
                    'https://79468735656e78dd.mokky.dev/items'
                );
                setItems(itemsRespone.data);
                setIsLoading(false);
            } catch (error) {
                console.log('Ошибка при запросе данных');
                console.log(error);
                setIsLoading(true);
            }
        }
        fetchData();
    }, []); // при первом рендере отрабоает useEffect

    const skeletons = [...new Array(4)].map((_, index) => (
        <Skeleton key={index} />
    )); // рендер фейкового массива

    const sushis = items.map((sushi) => (
        <SushiBlock
            key={sushi.id}
            // title={sushi.title}
            // imageUrl={sushi.imageUrl}
            // describe={sushi.describe}
            // price={sushi.price}
            // если я уверен что в компоненте будут все свойства, что я описал выше
            // то передаю просто с помощуью спред оператора
            {...sushi}
        />
    ));

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories />
                <Sort />
            </div>
            <h2 className='content__title'>Все роллы</h2>
            <div className='content__items'>
                {isLoading ? skeletons : sushis}
            </div>
        </div>
    );
};

export default Home;
