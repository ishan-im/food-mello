
import './App.css';

import Navbar from './components/Navbar/Navbar';

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Food from './pages/Food';
import About from './pages/About';
import Contact from './pages/Contact';




function App() {
  return (

    <div >
     <Navbar/>

     <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path='/menu' element={<Food/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
     </Routes>
     
     <Footer/>
      
    </div>

  );
}

export default App;
