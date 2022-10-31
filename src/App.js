import { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import ProtectRoute from './Authentication/ProtectRoute';
import Signup from './Authentication/Signup';
import HomePage from './components/HomePage';
import { UserAuthContextProvider } from './context/AuthContext';
//import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
     
      {/* <Login/>
      <Navbar/>
      <div className='align-post'>
      <Post/>
      </div> */}
<UserAuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<ProtectRoute><HomePage/></ProtectRoute>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
</UserAuthContextProvider>
      
      </div>
  );
}

export default App;
