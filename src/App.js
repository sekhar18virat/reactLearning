import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/welcome';
function App() {
  return (
    <div className="App">
      <Greet name = "sekhar" value = "sekhar"/>
      <Greet name = "react" value = "react"/>
      <Greet name = "react 2" value = "react"/>
      <Welcome />
    </div>
  );
}

export default App;
