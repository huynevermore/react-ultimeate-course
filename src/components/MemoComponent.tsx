import React from "react"

interface ProductItemprops {
  productItem: {
    name: string,
    id: number
  },
  onClick: () => void
}

function MemoComponent({ productItem, onClick }: ProductItemprops) {
  console.log("MemoComponent", onClick)
  return (
    <div>
      Product Item: {productItem.name} <br />

    </div>
  )
}

export default React.memo(MemoComponent)

// function customEqual(prevProps, nextProps) {
//   return prevProps.productItem.name ===  nextProps.productItem.name
// }

// export default React.memo(MemoComponent, customEqual)
