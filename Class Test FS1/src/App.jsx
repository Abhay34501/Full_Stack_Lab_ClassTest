import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import LoginToggle from "./Components/LoginToggle";
import LiveSearch from "./Components/LiveSearch";
import Stopwatch from "./Components/Stopwatch";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Full Stack Web Development</h1>
      <h2>Frontend Practical Test</h2>

      <div className="components">
        <Counter />
        <TodoList />
        <LoginToggle />
        <LiveSearch />
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
