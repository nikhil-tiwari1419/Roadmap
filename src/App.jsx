import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './Context/Theme';
import Pageloader from './Components/Pageloader';

const Welcome = React.lazy(() => import('./Pages/Welcome'));
const Home = React.lazy(() => import('./Pages/Home'));
const FullStack = React.lazy(() => import('./Pages/FullStack'));
const Web3 = React.lazy(() => import('./Pages/Web3'));
const Dsa = React.lazy(() => import('./Pages/Dsa'));
const Devops = React.lazy(() => import('./Pages/Devops'));
const Git = React.lazy(() => import('./Pages/Git'));
const AI = React.lazy(() => import('./Pages/AI'));

function App() {
  return (

    <ThemeProvider>
      <Suspense fallback={<Pageloader />}>
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
      </Suspense>
    </ThemeProvider>

  )
}

export default App

