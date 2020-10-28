import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Countdown
          date="2020/10/28" // {Year/Month/Day}
          time="6:30:00"   // {Hour:Minute:Second}
          timezone="America/Los_Angeles" 
        />

      </header>
    </div>
  );
}

export default App;
