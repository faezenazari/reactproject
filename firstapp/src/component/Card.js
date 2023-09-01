import React, { Component } from 'react';
import Styles from './Card.css';



class Card extends Component {

 render() {
  const {image, name, cost} = this.props;
 
  
  return (
   <div className='cardContainer'>
    <img  className={Styles.img_box} src={image} alt='smart phone'/>
    <h1>{name}</h1>
    <p>{cost}</p>
    
    </div>

  );
 }
}

export default Card;
