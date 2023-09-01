import React from 'react';
import styles from './Banner.css';
import banner from '../images/banner.jpg'


const Banner = () => {
 return (
  <div className='container'>
   <img src={banner} alt='banner'/>
   <div className='textContainer'>
    <h1 className = {styles.title}>web design </h1>
    <p> programming with <span className='text'> react.js</span></p>
   </div>
   
  </div>
 );
};

export default Banner;