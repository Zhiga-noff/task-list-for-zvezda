// Подключение стилей
import '../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { WrapperContext } from './context/WrapperContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <WrapperContext>
            <App />
        </WrapperContext>
    </React.StrictMode>,
);
