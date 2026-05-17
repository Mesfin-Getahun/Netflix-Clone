import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Navbar = () => {

   const navRef = useRef();

   useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 80){
            navRef.current.classList.add('nav-dark')
        }else{
            navRef.current.classList.remove('nav-dark')
        }
    })
   },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <Link to="/"><img src={logo} alt="Netflix Logo" /></Link>
        <ul>
            <Link to="/" style={{color: 'white', textDecoration: 'none'}}><li>Home</li></Link>
            <li onClick={() => toast.info("TV Shows coming soon!")} style={{cursor: 'pointer'}}>TV Shows</li>
            <li onClick={() => toast.info("Movies coming soon!")} style={{cursor: 'pointer'}}>Movies</li>
            <li onClick={() => toast.info("New & Popular coming soon!")} style={{cursor: 'pointer'}}>New & Popular</li>
            <li onClick={() => toast.info("My List coming soon!")} style={{cursor: 'pointer'}}>My List</li>
            <li onClick={() => toast.info("Languages coming soon!")} style={{cursor: 'pointer'}}>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt=""  className='icons'/>
        <div className="navbar-profile">
            <img src={profile_img} alt="" className='profile' />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
