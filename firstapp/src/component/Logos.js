import React from 'react';
import Styles from "./Logos.css";
import apple from "../images/apple.png";
import samsung from "../images/samsung.png";
import Xiaomi from "../images/xiami.png";
// import styled from 'styled-components';




const Logos = () => {
 return (
  <div  className = " LogosContainer">
   <h3>Who Support Us?</h3>
   <div>
   <img src={apple}  className={Styles.appleImg} alt='smart phone logo'/>
   <img src={samsung} alt='smart phone logo'/>
   <img src={Xiaomi} alt='smart phone logo' />
   
   </div>
   
  </div>
 );
};

export default Logos;