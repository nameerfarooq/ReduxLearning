import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './redux/actions/index';
function App() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.changeTheNumber)
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(decNumber(5))}>-</button>
        <span className='mx-2'>{value}</span>
        <button onClick={() => dispatch(incNumber(5))}>+</button>
      </div>
    </div>
  );
}

export default App;
