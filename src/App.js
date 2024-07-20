import './App.css';
import Home from './Components/Home';

function App() {
  return (
  <div className="App">
    <>
  <p>{process.env.REACT_APP_MAHESH_CHAVAN}</p>
  <Home/>
    </>
    </div>
  );
}

export default App;
