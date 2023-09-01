import React, { Component } from 'react';
import Card from './Card';
import Styles from './Cards.css';
import iphoneX from '../images/iPhone.jpg';
import iphone13 from '../images/iphone13.jpg';
import iphone14 from '../images/iphone14.jpg';
import s21 from '../images/s21.jpg';

class Cards extends Component {
 render() {
  return (
   <div className='cardsContainer'>
     <Card className ={Styles.Card} image = {iphoneX} name = "IphoneX" cost = "500$"></Card>
     <Card  image = {iphone13} name = "Iphone 13" cost = "500$"></Card>
     <Card  image = {iphone14} name = "Iphone 14" cost = "600$"></Card>
     <Card  image = {s21} name = "s21 Ultra" cost = "300$"></Card>
   </div>
  );
 } 
}

export default Cards;
