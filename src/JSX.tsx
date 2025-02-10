import React from 'react';

function Element1() {
    return (
        <div>element1</div>
    )
}

function JSX() {

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