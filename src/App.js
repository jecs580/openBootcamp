import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent/> */}
        <ComponenteA/>
      </header>
    </div>
  );
}

export default App;
