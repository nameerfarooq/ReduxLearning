import logo from './logo.svg';
import './App.css';
import Shop from './Shop';
import { useSelector } from 'react-redux';
import { useState } from 'react';
function App() {
  const amount = useSelector(state => state.amount)
  return (
    <div className="App">
      <div>
        your current balance is {amount}
      </div>
      <Shop />
    </div>
  );
}

export default App;
