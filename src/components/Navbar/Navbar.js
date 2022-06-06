import React,{useState} from 'react'

import logo from '../../assets/logo.png'

import './Navbar.css'

import MenuIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom'

function Navbar() {

    const [showLinks, setshowLinks] = useState(false)

    const toggleLinks = ()=>{

        setshowLinks(!showLinks);
    }


  return (

    <nav className="navbar">

           <div className="leftSide" id={showLinks? "open" : "close"}>

            <img src={logo} alt='logo'/>

            <div className="hiddenLinks">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            </div>

        <div className="rightSide">

            <Link to='/'>Home</Link>
            <Link to='menu'>Menu</Link>
            <Link to='about'>About</Link>
            <Link to='/contact'>Contact</Link>
            
            <button onClick={toggleLinks}>
             <MenuIcon/>
            </button>
        
        </div>
       
    </nav>

  )
}

export default Navbar