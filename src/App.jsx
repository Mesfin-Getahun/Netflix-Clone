import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./Pages/Home/Home'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Player = lazy(() => import('./Pages/Player/Player'));

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        if (window.location.pathname === '/login') {
          navigate('/');
        }
      }else{
        console.log("Logged Out");
        navigate('/login');
      }
    })

    return () => unsub();

  },[navigate])

  return (
    <>
     <ToastContainer theme='dark' />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/player/:id' element={<Player/>} />
        </Routes>
      </Suspense>
      </>

  )
}

export default App
