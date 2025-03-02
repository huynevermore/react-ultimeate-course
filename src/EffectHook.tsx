import React from 'react'

/*
first render -> initial state -> render UI -> useEffect -> call api -> set state -> re-render UI

clean up function
- clean up run after component re-render and unmounted (not run first render)
- clean up run before side effect

*/

function EffectHook() {
  const [count, setCount] = React.useState(1);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect no dependency");
    
    return () => {
      console.log("clean up useEffect no dependency");
    }
  }); // run every component render (first render)

  React.useEffect(() => {
    console.log("useEffect empty dependency")

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })

    return () => {
      console.log("clean up useEffect empty dependency");
    }
  }, []) // run once component first render

  React.useEffect(() => {
    console.log("useEffect with dependency")

    return () => {
      console.log("clean up useEffect with dependency");
    }
  }, [count]) // run when deps changes

  React.useLayoutEffect(() => {
    console.log("useLayoutEffect no dependency");

    return () => {
      console.log("clean up useLayoutEffect no dependency");
    }
  }); // run every component render (first render)

  React.useLayoutEffect(() => {
    console.log("useLayoutEffect empty dependency")

    return () => {
      console.log("clean up useLayoutEffect empty dependency");
    }
  }, []) // run once component first render

  React.useLayoutEffect(() => {
    console.log("useLayoutEffect with dependency")

    return () => {
      console.log("clean up useLayoutEffect with dependency");
    }
  }, [count]) // run when deps changes


  console.log('------------', count);
  console.log('render UI');

  return (
    <div>
      <h2>EffectHook</h2>
      Count: {count}
      <button type="button" onClick={() => setCount(prevState => prevState + 1)}>Update Count</button>

      <h3>List User</h3>
      {users.length === 0 ? (
        <>
          Loading user ....
        </>
      ) : (
        <>
          {users.map((user: any) => {
            return (
              <div>Name: {user.name}</div>
            )
          })}

          <div>
            <div 
              className='box1'
              style={{ width: 200, height: 100, backgroundColor: '#f00'}}
              onClick={() => console.log(1)}
            >
              box 1</div>
            <div style={{ width: 200, height: 100, backgroundColor: '#ff0'}}>box 2</div>
          </div>
        </>
      )}
    </div>
  )
}

export default EffectHook