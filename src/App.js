// import Footer from './Footer';
import Greetings from "./Greetings";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
// import Clock from './Clock';
import React, { useEffect, useState } from "react";
import EventHandler from "./EventHandler";
import TodoApp from "./ToDo";

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
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todo">To-Do</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router>
      {/* <div>
      <h1>Hello World</h1>
     <Clock />
     </div>
     <div> */}
      {/* <Greetings name="Akshata" message="Good Day!" /> */}
      {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>
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
      {/* <form className="myClass">
        <input
          type="text"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        /> */}
        {/* <input
          type="email"
          // value={email}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          //   setEmailError("");
          // }}
          placeholder="Email"
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "lightblue",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Inline Styling Example
      </div> */}
    </div>
  );
}

export default App;
