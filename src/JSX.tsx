import React from 'react';
import { useAppContext } from './context/AppContext';
import { useLocation, useParams } from 'react-router-dom';

function Element1() {
    return (
        <div>element1</div>
    )
}

function JSX() {
    const params = useParams();
    const { isLoading } = useAppContext();

    console.log('params: ',params)


    const element_1 = (
        <div>element1</div>
    )

    return (
        <React.Fragment key="1">
            <h1>JSX</h1>
            <div>title</div>
            {element_1}
            <Element1 />
        </React.Fragment>
    )
}

export default JSX