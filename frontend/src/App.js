import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login'
import PageProduto from "./pages/PageProduto";

function App() {
  return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/cadastro' element={<Cadastro/>}/>
              <Route exact path='/produto' element={<PageProduto/>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
