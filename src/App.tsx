import React from 'react';
import './App.css';
import { Form } from "./container/Form"

function App() {
  return (
    <div className="App">
      <header >
        <p>Chen Chen</p>
      </header>
      <Form onSubmit={(body: string) => alert(body)} />
    </div>
  );
}

export default App;
