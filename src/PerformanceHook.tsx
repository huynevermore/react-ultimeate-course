
import React from 'react'

import MemoComponent from './components/MemoComponent';
import { useResizeWindow } from './hooks/useResizeWIndow';

function PerformanceHook() {
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
    setCount(prevState => prevState + 1)
  }

  // re-created every component re-render
  const updateProduct = React.useCallback(() => {
    console.log('count: ', count)
    setProductItem(prevState => ({
      ...prevState,
      name: 'tony' + Date.now()
    }))
  },[count]); // a 

  return (
    <div>
      <h1>PerformanceHook</h1>
      Count time: {count} <br />
      Total: {total} <br />
      Smalll Screen: {isSmallScreen ? 'true' : 'false'} <br />
      <button type="button" onClick={forceUpdate}>Force Update</button>

      <MemoComponent productItem={productItem} onClick={updateProduct} />
      <br />
      <button type="button" onClick={updateProduct}>Update Product</button>

    </div>
  )
}

export default PerformanceHook