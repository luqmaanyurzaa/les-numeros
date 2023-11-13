//import logo from './logo.svg';
import './App.css';
import Entry from './entry';
import Numbers from './Numbers';

function App() {
  return (
    <div className="container">
      <div className='Number'>
        <Numbers></Numbers>
      </div>
      <div className="Entry">
        <Entry></Entry>
        </div>

    </div>
  );
}

export default App;