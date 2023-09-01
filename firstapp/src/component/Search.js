import React, { Component } from 'react';
import Styles from './Search.css';

class Search extends Component {
 constructor(){
  super();
  this.state={
   text:""
  }
 }

 changeHandler = event => {
  this.setState({
   text:event.target.value,
  })


 }
 render() {
  return (
   <div className='searchContainer'>
    <p className={Styles.Search}>Search What you want</p>
    <div>
    <input type='text' placeholder='search' onChange={this.changeHandler}/>
    <br/>
    <span>{this.state.text}</span>
    </div>
    
    
   </div>
  );
 }
}

export default Search;