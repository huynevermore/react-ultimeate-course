
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
// import BoxGenerator from './example/huy/GenerateBox';

function App() {
  const address = {
    city: 'HCM',
    ward: 13
  }

  return (
    <>
      <JSX />

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

      <State />

      <br />
      <HandleEvent />

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
    </>
  )
}

export default App
