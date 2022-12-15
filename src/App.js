import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name = "sekhar" value = "sekhar"/>
      <Greet name = "react" value = "react"/>
      <Greet name = "react 2" value = "react"/>
      <Welcome name = "Sekhar" value = "classComponent"/> */}
    </div>
  );
}

export default App;
