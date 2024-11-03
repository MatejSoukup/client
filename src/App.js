import './App.css';
import {Detail} from './pages/Detail'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { List } from './pages/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path="detail/:id" element={<Detail />} />
      </Routes> 
      </BrowserRouter>
       
    </div>
  );
}

export default App;
