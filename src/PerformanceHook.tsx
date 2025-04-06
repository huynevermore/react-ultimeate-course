
import React from 'react'

import MemoComponent from './components/MemoComponent';
import { useResizeWindow } from './hooks/useResizeWIndow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types';

function PerformanceHook() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const theme = useSelector((state: RootState) => state.app.theme);
  const product = useSelector((state: RootState) => state.app.product);
  const productFilteredNew = product.filter(item => item.status === 'new')

  const { isSmallScreen } = useResizeWindow();
  const [count, setCount] = React.useState(1);
  const [productItem, setProductItem] = React.useState({
    name: 'tony',
    id: 1
  })

  const total = React.useMemo(() => {
    return  [1,2,3,4,5].reduce((acc, currItem) => {
      return acc = acc + currItem
    }, 0)
  }, [])
  
  function forceUpdate() {

  }

  // re-created every component re-render
  const updateProduct = React.useCallback(() => {
    console.log('count: ', count)
    setProductItem(prevState => ({
      ...prevState,
      name: 'tony' + Date.now()
    }))
  },[count]); // a 

  console.log("state redux: ", {
    state
  })

  return (
    <div>
      <h1>PerformanceHook</h1>
      Count time: {count} <br />
      Total: {total} <br />
      Smalll Screen: {isSmallScreen ? 'true' : 'false'} <br />
      Demo theme redux: {theme} <br />
      <button type="button" onClick={forceUpdate}>Force Update</button>
      <button type="button" onClick={forceUpdate}>Add Product</button> <br />
      {productFilteredNew.map(item => (
        <div key={item.id}>
          Name: {item.name} <br />
          Status: {item.status}
        </div>
      ))}

      <MemoComponent productItem={productItem} onClick={updateProduct} />
      <br />
      <button type="button" onClick={updateProduct}>Update Product</button>

    </div>
  )
}

export default PerformanceHook