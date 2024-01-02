import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';

const Home = () => {
    return (
        <div className='container'>
            <div className='content__top'>
                <Categories />
                <Sort />
            </div>
            <h2 className='content__title'>Все роллы</h2>
            <div className='content__items'>
                <SushiBlock />
                <SushiBlock />
                <SushiBlock />
                <SushiBlock />
            </div>
        </div>
    );
};

export default Home;
