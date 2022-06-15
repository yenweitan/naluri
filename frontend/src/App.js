import logo from './logo.svg';
import './App.css';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className="naluri">
      <header className="naluri-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Mainbody/>
    </div>
  );
}

export default App;
