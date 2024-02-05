import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <>
            <div className='wrapper'>
                <Header
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className='content'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home searchValue={searchValue} />}
                        />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
