import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber, DivNumber, mulNumber, changeNameToFather, changeNameToSon } from './redux/actions/index';

function App() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.changeTheNumber)
  const currentName = useSelector((state) => state.changeTheName)
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(DivNumber(2))}>/</button>
        <button onClick={() => dispatch(decNumber(5))}>-</button>
        <span className='mx-2'>{value}</span>
        <button onClick={() => dispatch(incNumber(5))}>+</button>
        <button onClick={() => dispatch(mulNumber(3))}>*</button>
      </div>
      <div>
        {currentName}
      </div>
      <div>
        <button onClick={() => dispatch(changeNameToFather("Muhammad Farooq"))}>Father</button>
        <button onClick={() => dispatch(changeNameToSon("Muhammad Nameer"))}>Son</button>
        <button onClick={() => dispatch(changeNameToSon("Muhammad Zayan"))}>Son2</button>
      </div>
    </div>
  );
}

export default App;
