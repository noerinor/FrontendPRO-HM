import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI Interface</h1>
      <div className="card">
      <div className="input-group mb-0">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" classclassName="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
        <div className="card-header">
          <h2>Luke Skywalker</h2>
        </div>
        <div className="card-body">
          <p><strong>Height:</strong> 172 cm</p>
          <p><strong>Mass:</strong> 77 kg</p>
          <p><strong>Hair Color:</strong> Blond</p>
          <p><strong>Skin Color:</strong> Fair</p>
          <p><strong>Eye Color:</strong> Blue</p>
          <p><strong>Birth Year:</strong> 19BBY</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Homeworld:</strong> Tatooine</p>
          <p><strong>Films:</strong></p>
          <ul>
            <li>A New Hope</li>
            <li>The Empire Strikes Back</li>
            <li>Return of the Jedi</li>
            <li>Revenge of the Sith</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
