import logo from './logo.svg';
import './App.css';
import Square from './Components/Square';
import Header from './Components/Header';
import Player  from './Components/Players';

function App() {
  return (
    <div>
      <div className="App">
        <Header/>
      </div>
      <div>
        <Player playerName={"X"}/>
        <Player playerName={"O"}/>

      </div>
      <div>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );
}


export default App;



