import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import AddNewUser from './AddNewUser';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addNewUser' element={<AddNewUser />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
