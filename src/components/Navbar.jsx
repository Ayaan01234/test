import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar bg-primary">
  <div class="container-fluid">
  </div>
    <Link to='Home'><span class="navbar-brand mb-0 h1">Home</span></Link>
   <Link to='About'> <span class="navbar-brand mb-0 h1">About</span></Link>
  <Link to='Contact'>  <span class="navbar-brand mb-0 h1">Contact</span></Link>


</nav>
  )
}

export default Navbar
