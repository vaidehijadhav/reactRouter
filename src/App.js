import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Lab1 from './components/Lab1';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Lab1/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
