import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import sushis from '../assets/db.json';

const Home = () => {
    return (
        <div className='container'>
            <div className='content__top'>
                <Categories />
                <Sort />
            </div>
            <h2 className='content__title'>Все роллы</h2>
            <div className='content__items'>
                {sushis.map((obj) => (
                    <SushiBlock
                        key={obj.id}
                        // title={obj.title}
                        // imageUrl={obj.imageUrl}
                        // describe={obj.describe}
                        // price={obj.price}
                        // если я уверен что в компоненте будут все свойства, что я описал выше
                        // то передаю просто с помощуью спред оператора
                        {...obj}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
