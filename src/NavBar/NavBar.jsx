
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './NavBar.module.css';

export default function NavBar() {
  
  return (
    <div>
        <Navbar bg="dark" expand="lg" className='px-5' >
        <Navbar.Brand href="#home" className='w-25 text-white'>Movies</Navbar.Brand>
        <div className={`w-25 ${style.search}`}>
            <input type="text" placeholder='Search here ....' />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto r">
            <Nav.Link href="#home" className='text-white'>Now playing</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Popular</Nav.Link>
            <Nav.Link href="#link" className='text-white'>TopRated</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Trending</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Up coming</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      
    </div>
  )
}
