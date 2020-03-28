import React from 'react';
import './App.css';
import { Form } from "./components/Form"

function App() {
  return (
    <div className="App">
      <header >
        <p>Chen Chen</p>
      </header>
      <Form submitLabel='Sumit' formLabels={['Name', 'Password']} onSubmit={(body: string) => alert(body)} />
    </div>
  );
}

export default App;
