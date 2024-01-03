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
                {sushis.map((item) => (
                    <SushiBlock
                        title={item.title}
                        imageUrl={item.imageUrl}
                        describe={item.describe}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
