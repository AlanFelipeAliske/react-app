import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Details from './pages/details/details'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/details/:id' element={<Details />}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
