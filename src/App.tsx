
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import JSX from './JSX';
import Props from './Props';
import Button from './components/Button';
import State from './State';
import HandleEvent from './HandleEvent';
import Condition from './Condition';
import ListKey from './ListKey';
import LiftingStateUp from './LiftingStateUp';
import GuestGreeting from './example/huy/GuestGreeting';
import { GenerateBox } from './example/huy/GenerateBox';
import Form from './Form';
import StateHook from './StateHook';
import ColorBox from './sample-app/tony/ColorBox';
import Arcodion from './sample-app/tony/Arcodion';
// import BoxGenerator from './example/huy/GenerateBox';
import EffectHook from './EffectHook';
import React from 'react';
import Todo from './Todo';
import RefHook from './RefHook';
import PerformanceHook from './PerformanceHook';
import TodoRoute from './TodoRoute';
import TodoRouteShow from './TodoRouteShow';
import User from './User';
import GoogleAnalytic from './GoogleAnalytic';
import InteractiveComponent from './components/interactive-component';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const address = {
    city: 'HCM',
    ward: 13
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true)
    }, 1000)
  }, [])

  return (
    <>
    <InteractiveComponent>
      <div>
        {isAuthenticated  && (
          <div className="layoutShift">
            <img src="/images/skeleton.webp" alt="" width={500} height={200} />
          </div>
        )}
      </div>
    </InteractiveComponent>
     
      
      
      <GoogleAnalytic />
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link 
                  to="/jsx"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  JSX
                </Link>
              </li>
              <li>
                <NavLink 
                  to="/props"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Props
                </NavLink>
              </li>
              <li>
                <Link 
                  to="/state"
                  replace
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  State
                </Link>
              </li>
              <li>
                <Link 
                  to="/handle-event"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Handle Event
                </Link>
              </li>
              <li>
                <Link 
                  to="/todo"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Todo
                </Link>
              </li>
              <li>
                <Link 
                  to="/user"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/jsx" element={<JSX />} />
          <Route 
            path="/props" 
            element={
              <Props 
                {...address}
                city="HN"
                firstName="tony" // string
                isMale={true} // boolean
                age={18} // number
                colors={['red', 'blue']} // array
                onSubmit={() => {}} // function
                first-name="tony multiword"
                component1={Button}
                component2={<Button type='button' />}
              />
            } 
          />
          <Route path="/state" element={<State />} />
          <Route path="/handle-event" element={  <HandleEvent />} />
          <Route path="/todo" element={<TodoRoute />} />
          <Route path="/todo/:todoId" element={<TodoRouteShow />} />
          {/* <Route path="/user" element={<User />} />
          <Route path="/user/profile" element={<div>this is profile</div>} />
          <Route path="/user/account" element={<div>this is account</div>} /> */}
          <Route path="/user" element={<User />}>
            <Route path="profile" element={<div>this is profile</div>} />
            <Route path="account" element={<div>this is account</div>} />
          </Route>
        </Routes>
      </main>

      <hr />

      <br />
      <Condition />

      <br />
      <ListKey />

      <br />
      <LiftingStateUp />

      <br/>
      <GuestGreeting />

      <br/>
      <GenerateBox />

      <br />
      
      <Form />
      <br />

      <StateHook />

      <br />
      <ColorBox />

      <br />
      <Arcodion />

      <br />
      <br />
      <div>
        <button onClick={() => setIsAuthenticated(prevState => !prevState)}>Toggle Show/Hide EffectHook</button>
      </div>
      {isAuthenticated && (
        <EffectHook />
      )}

      <br />
      <Todo />

      <br />
      <RefHook name="tony" />

      <br />
      <PerformanceHook />



      <br />
      <br /><br />
      <br />
      <br />
    </>
  )
}

export default App
