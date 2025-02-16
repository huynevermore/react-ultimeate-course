// function recreated on each component re-render
function HandleEvent() {

    // click -> () => {} -> forceUpdate -> excute
    // const forceUpdate = (id: number) => {
    //     console.log('forceUpdatre: ', id)
    // }

    // curry function
    // click -> forceUpdate -> excute
    const forceUpdate = (id: number) => () => {
        console.log('forceUpdatre: ', id)
    }
    
    return (
        <div>
            <h1>HandleEvent</h1>
            {/* <button type="button" onClick={() =>forceUpdate(1)}>Handle Event</button> */}
            <button type="button" onClick={forceUpdate(1)}>Handle Event</button>
        </div>
    )
}

export default HandleEvent