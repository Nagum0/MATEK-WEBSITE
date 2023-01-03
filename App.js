import './index.css'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import Tetelek from './components/pages/Tetelek';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/tetelek' element={<Tetelek />}></Route>
      </Routes>
    </>
  );
}

export default App;
