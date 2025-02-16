import React from 'react'
import clsx from 'clsx';
import Button from './components/Button';
import styled from 'styled-components';

interface BoxStyledProps {
    type: string;
}

const BoxStyled = styled.div<BoxStyledProps>`
    backgroundColor: ${(props: any) => props.type === 'correct' ? 'green' : props.type === 'none' ? 'gray' : 'red'}
`

/*
button-none: gray
button-correct: green
button-nocorrect: red
*/
function ListKey() {
    const [auth, setAuth] = React.useState(true);
    const [type] = React.useState('correct');
    const [products] = React.useState([
        { id: 1, name:  'banana' },
        { id: 2, name:  'laptop' },
    ]);
    // const convertedProducts = products.map((product, index) => ({
    //     ...product,
    //     productId: index
    // }))

    const listProducts = products.map(product => {
        return (
            <div key={product.id}>Name: {product.name}</div>
        )
    })
    console.log('listProducts: ', listProducts)

    function toggleAuth() {
        setAuth(prevState => !prevState);
    }
    return (
        <div>
            <h1>ListKey</h1>
            {listProducts}
            <br />
            <BoxStyled
                type={type}
                className={clsx(
                    "button",
                    auth && 'authenticated',
                    type === 'correct' && 'button-correct',
                    type === 'none' && 'button-none',
                    type === 'nocorrect' && 'button-nocorrect',
                )}
            >
                <Button text="Toggle Auth" onClick={toggleAuth}/>
            </BoxStyled>
            {/* {products.map(product => {
                return (
                    <div key={product.id}>Name: {product.name}</div>
                )
            })} */}
        </div>
    )
}

export default ListKey