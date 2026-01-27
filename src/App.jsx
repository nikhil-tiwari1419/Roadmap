import React from 'react'
import { Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import FullStack from './Pages/FullStack';
import Web3 from './Pages/Web3';
import Dsa from './Pages/Dsa';
import Git from './Pages/Git';
import Devops from './Pages/Devops';
import AI from './Pages/AI';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './Context/Theme';
function App() {
  return (

    <ThemeProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/FullStack' element={<FullStack />} />
        <Route path='/Web3' element={<Web3 />} />
        <Route path='/Git' element={<Git />} />
        <Route path='/Dsa' element={<Dsa />} />
        <Route path='/Devops' element={<Devops />} />
        <Route path='/AI' element={<AI />} />
      </Routes>
    </ThemeProvider>

  )
}

export default App