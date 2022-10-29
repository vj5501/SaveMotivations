import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='align-post'>
      <Post/>
      </div>
      </div>
  );
}

export default App;
