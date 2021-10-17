
import './App.css';
import About from './components/About';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Services from './components/Services';

function App() {
  return (
    <div className = "App">
      <Navbar/>
      <MainHeader/>
      <About/>
      <Services/>
      <Reviews/>
    </div>
  );
}

export default App;
