import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import AddNewUser from './AddNewUser'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <BrowserRouter>
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
