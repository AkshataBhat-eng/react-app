import Footer from './Footer';
import Greetings from './Greetings';
import './App.css';
import Clock from './Clock';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="App">
     <div>
      <h1>Hello World</h1>
     <Clock />
     </div>
     <div>
      <Greetings name='Akshata' message='Good Day!' />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <div>{count}</div>
      <Footer />
     </div>
    </div>
  );
}

export default App;
