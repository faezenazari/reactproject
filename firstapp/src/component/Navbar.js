import React from 'react';
import Styles from './Navbar.css';
import logo from '../images/Logo.png';


const Navbar = () => {
 return (


  <header className={Styles.header} >
   <div className='listContainer '>
    <ul className='list' >
     <li>homepage</li>
     <li>products</li>
     <li>about us</li>
    </ul>

   </div>
   <div className='logo' >
    <img className='logo' src={logo} alt="Logo" />
   </div>
   

  
  </header>

      

 );
};


export default Navbar;