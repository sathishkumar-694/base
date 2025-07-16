import logo from './logo.svg';
import './App.css';
import Gel from './components/hello';
import Varia from './components/print'; // Capitalized component name

function App() {
  return (
    <div className="App">

      <main className="mainContent">
        <div className="bing"><Varia/></div>
      </main>
    </div>
  );
}

export default App;
