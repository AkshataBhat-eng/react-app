import Footer from './Footer';
import Greetings from './Greetings';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
     <div>
      <h1>Hello World</h1>
     <Clock />
     </div>
     <div>
      <Greetings name='Akshata' message='Good Day!' />
      <Footer />
     </div>
    </div>
  );
}

export default App;
