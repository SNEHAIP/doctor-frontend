import logo from './logo.svg';
import './App.css';
import AddDoctor from './components/AddDoctor';
import SearchDoctor from './components/SearchDoctor';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddDoctor/>}/>
      <Route path='/search'element={<SearchDoctor/>}/>
      <Route path='/view'element={<ViewAll/>}/>
  
    </Routes>
    </BrowserRouter>

  );
}

export default App;
