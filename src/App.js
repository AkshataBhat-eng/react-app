import Footer from './Footer';
import Greetings from './Greetings';
import './App.css';
import Clock from './Clock';
import { useEffect, useState } from 'react';
import EventHandler from './EventHandler';

function App() {
  const [count, setCount] = useState(0)
  const [showMessages, setShowMessages] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="App">
     {/* <div>
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
     </div> */}
     <main>
      <button onClick={()=>setShowMessages(!showMessages)}>Toggle Message</button>
      <div>{showMessages && 'Hello, React Event Handling!'}</div>
      <EventHandler />
     </main>
    </div>
  );
}

export default App;
