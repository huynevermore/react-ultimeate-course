import React from "react"

/* 
&&: phân biệt vế
- vế trái là true thì lấy vế phải
- vế trái là false thì lấy vế trái

'' && 'tony' -> ''
'tony' && 'hoang' && 'huy' -> 'huy'
'tony' && '' -> ''
'hoang' && 'huy' -> 'huy'

||: get vế true đầu tiên
'tony' || 'hoang' || 'huy' -> 'tony'
'' || 'hoang' || 'huy' -> 'hoang'
*/


function Condition() {
    const [auth, setAuth] = React.useState(false);
    let renderButton = null;

    if(auth) {
        renderButton = <div>authenticated</div>
    }

    return (
        <div>
            <h1>Condition</h1>
            {renderButton}
        </div>
    )
}

export default Condition