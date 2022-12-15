import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionEventHandling from './components/FunctionEventHandling';
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <FunctionEventHandling />
      {/* <Message /> */}
      {/* <Greet name = "sekhar" value = "sekhar"/>
      <Greet name = "react" value = "react"/>
      <Greet name = "react 2" value = "react"/>
      <Welcome name = "Sekhar" value = "classComponent"/> */}
    </div>
  );
}

export default App;
