
import './App.css';
import About from './components/About';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className = "App">
      <Navbar/>
      <MainHeader/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
