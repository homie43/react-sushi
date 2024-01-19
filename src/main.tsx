import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import './scss/app.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
