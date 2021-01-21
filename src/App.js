import scientist from './img/female-scientist-illustration.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Page under construction.</p>
        <img src={scientist} className="sci-illustration" alt="female scientist illustration" />
        <span className="img-credits">Image credits <a href="https://www.freepik.com/vectors/hand">here</a></span>
      </header>
    </div>
  );
}

export default App;
