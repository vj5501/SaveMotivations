import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import ProtectRoute from './Authentication/ProtectRoute';
import Signup from './Authentication/Signup';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import YourPost from './components/YourPost';
import EditProfile from './components/EditProfile';
import { UserAuthContextProvider, useUserAuth} from './context/AuthContext';
//import Navbar from './components/Navbar';

function App() {
  
  let {user} = useUserAuth;
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
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/yourpost' element={<ProtectRoute><YourPost/></ProtectRoute>}/>
        <Route path='/edit' element={<EditProfile/>}/>
      </Routes>
      </BrowserRouter>
</UserAuthContextProvider>
      
      </div>
  );
}

export default App;
