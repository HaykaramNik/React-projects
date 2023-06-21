import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = [
  'Click me',
  'Click me please',
  'Hit me',
  'Press me'
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button text={text} onClick={incrementCount} key={index}/>;
      })}
    </div>
  );
}

export default App;