import React from 'react';
import NavigationBar from './Components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Home from './Pages/Home';
import About from './Pages/About';
import Detail from './Pages/Detail';
function App() {
  
  return (
    <>
    <NavigationBar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </div>

    </>
  );
}

export default App;
