
import './App.css';
import About from './components/About';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className = "App">
      <Navbar/>
      <MainHeader/>
      <About/>
    </div>
  );
}

export default App;
