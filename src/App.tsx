
import JSX from './JSX';
import Props from './Props';
import Button from './components/Button';
import State from './State';

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
    </>
  )
}

export default App
