import React from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Cards from './component/Cards';
import Search from './component/Search';
import Logos from './component/Logos';
import Footer from './component/Footer';

class App extends React.Component {
  render() {
    return (

      <div>
        <Navbar></Navbar>
        <Banner></Banner>
         <Cards></Cards>
         <Search></Search>
         <Logos></Logos>
         <Footer></Footer>
      </div>
    )
  };
};


export default App;