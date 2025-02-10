import React from "react"

/*
const obj1 = {}; // memory A
const obj2 = obj1; // memory B -> refer memory A
const obj3 = {} // memory C

obj1 === obj2 -> true
obj1 === obj3 -> false
*/

function State() {
    const [count, setCount] = React.useState(0); // 0 0 pending state  -> don't render
    const [message, setMessage] = React.useState({
        type: 'error',
        title: 'Something went wrong'
    }); // memory A

    function updateMessage() {
        // message.title = 'tony'; //  memory A
        // const newMessage = { ...message}; // copy new refer
        // newMessage.title = 'tony';
        // setMessage(newMessage);

        // updater function
        setMessage((prevState) => {
            console.log('prevState: ', prevState)
            return {
                ...prevState,
                title: 'tony'
            }
        })
    }

    console.log('state render', {
        message
    })
    return (
        <div>
            <h1>State</h1>
            Count: {count} <br />
            Title Message: {message.title}  <br />
            <button onClick={() => setCount(0)}>Update Count</button>  <br />
            <button onClick={updateMessage}>Update Message</button>
        </div>
    )
}

export default State