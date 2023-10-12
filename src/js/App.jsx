import React from 'react';
import { Header, Main, SideBar } from './components';

export const App = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <SideBar />
                <Main />
            </div>

        </>
    );
};
