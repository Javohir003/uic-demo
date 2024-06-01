import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loaders/Loader';
import './Loaders/Loader.scss';

function ATest({ loaders, setLoaders }) {
    const location = useLocation();

    useEffect(() => {
        setLoaders(true);
        const timer = setTimeout(() => {
            setLoaders(false);
        }, 2500);

        return () => {
            clearTimeout(timer)
            document.documentElement.style.overflow = 'auto';
        }
    }, [location.pathname]);

    return (
        <div className={`box-mask fixed-loader ${loaders ? '' : 'loading'}`}>
            {loaders && <Loader />}
        </div>
    );
}

export default ATest;
