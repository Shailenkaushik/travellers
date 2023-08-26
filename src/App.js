import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Loginpage from './components/Loginfolder/Login';
import Register from './components/Loginfolder/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Manalipage from './components/Manalipage'

export default function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path={`/manaliPage/1`} element={<Manalipage name="Manali" id="1" />} />
          <Route path={`/manaliPage/2`} element={<Manalipage name="Goa" id="2" />} />
          <Route path={`/manaliPage/3`} element={<Manalipage name="Ooty" id="3" />} />
          <Route path={`/manaliPage/4`} element={<Manalipage name="Shillong" id="4" />} />
          <Route path={`/manaliPage/5`} element={<Manalipage name="Amritsar" id="5" />} />
          <Route path={`/manaliPage/6`} element={<Manalipage name="Shimla" id="6" />} />
          <Route path={`/manaliPage/7`} element={<Manalipage name="Varanasi" id="7" />} />
          { <Route path={`/Loginfolder/Login`} element={<Loginpage/>}/> }
          { <Route path={`/Loginfolder/Register`} element={<Register/>}/> }
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  )
}
