import React from "react"
import { useDispatch } from "react-redux";
import { setTheme } from "./redux/app.actions";
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
    const dispatch = useDispatch();
    const [auth, setAuth] = React.useState(false);
    let renderButton = null;

    if(auth) {
        renderButton = <div>authenticated</div>
    }

    console.log('COndition')

    return (
        <div>
            <h1>Condition</h1>
            <button 
                type="button"
                onClick={() => {
                    dispatch(setTheme('dark'))
                }}
            >
                Update theme
            </button>
            {renderButton}
        </div>

    )
}

export default Condition