import logo from './logo.svg';
import './App.css';
import Veiwmovie from './components/Veiwmovie';
import Movienew from './components/Movienew';
import Nav1 from './components/Nav1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Nav1/>
    <Routes>
    <Route path='/' element={<Movienew></Movienew>}></Route>
        <Route path='/Veiwmovie' element={<Veiwmovie data={{id:"",name:"",director:"",language:"",genere:"",release_year:""}} method="post" />}></Route>
  </Routes></BrowserRouter>
      
    
    </div>
  );
}

export default App;
