// import Footer from './Footer';
// import Greetings from './Greetings';
// import './App.css';
// import Clock from './Clock';
import React, { useEffect, useState } from "react";
import EventHandler from "./EventHandler";

function App() {
  // const [count, setCount] = useState(0)
  // const [showMessages, setShowMessages] = useState(false)
  // const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setEmailError("Invalid email format");
      return;
    }

    // Add form submission logic
    console.log("Form submitted successfully");
  };

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
      {/* <main>
      <button onClick={()=>setShowMessages(!showMessages)}>Toggle Message</button>
      <div>{showMessages && 'Hello, React Event Handling!'}</div>
      <EventHandler />

      <div>
        {items.map((ele, index) => (
          <div key={index}>{ele}</div>
        ))}
      </div>
     </main> */}
      <form>
        <input
          type="text"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          // value={email}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          //   setEmailError("");
          // }}
          placeholder="Email"
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default App;
