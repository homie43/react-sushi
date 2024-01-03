import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import axios from 'axios';

const Home = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const itemsRespone = await axios.get(
                    'https://79468735656e78dd.mokky.dev/items'
                );
                setItems(itemsRespone.data);
            } catch (error) {
                console.log('Ошибка при запросе данных');
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories />
                <Sort />
            </div>
            <h2 className='content__title'>Все роллы</h2>
            <div className='content__items'>
                {items.map((obj) => (
                    <SushiBlock
                        key={obj.id}
                        title={obj.title}
                        imageUrl={obj.imageUrl}
                        describe={obj.describe}
                        price={obj.price}
                        // если я уверен что в компоненте будут все свойства, что я описал выше
                        // то передаю просто с помощуью спред оператора
                        // {...obj}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
