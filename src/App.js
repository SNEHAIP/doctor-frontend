import logo from './logo.svg';
import './App.css';
import AddDoctor from './components/AddDoctor';
import SearchDoctor from './components/SearchDoctor';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
     <AddDoctor/>
     <SearchDoctor/>
     <ViewAll/>
    </div>
  );
}

export default App;
