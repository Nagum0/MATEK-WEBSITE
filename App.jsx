import './index.css'

/* Pages import */
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import Tetelek from './components/pages/Tetelek';

/* Tetelek import */
import Halmazok from './components/tetelek/Halmazok';
import Iteletek from './components/tetelek/Iteletek';
import Szamelmelet from './components/tetelek/Szamelmelet';
import AlgebraiKifejezesek from './components/tetelek/AlgebraiKifejezesk';

/* Router import */
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
        <Route path='/halmazok'element={<Halmazok />}></Route>
        <Route path='/iteletek'element={<Iteletek />}></Route>
        <Route path='/szamelmelet'element={<Szamelmelet />}></Route>
        <Route path='/algebrai_kefejezesek'element={<AlgebraiKifejezesek />}></Route>
      </Routes>
    </>
  );
}

export default App;
