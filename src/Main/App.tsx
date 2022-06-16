import React from 'react';
import Beef from '../Components/BurgerComponents/Beef';
import BottomBun from '../Components/BurgerComponents/BottomBun';
import Cheese from '../Components/BurgerComponents/Cheese';
import Lettuce from '../Components/BurgerComponents/Lettuce';
import Onion from '../Components/BurgerComponents/Onion';
import Tomato from '../Components/BurgerComponents/Tomato';
import TopBun from '../Components/BurgerComponents/TopBun';
import logo from '../images/logo.svg';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <TopBun />
      <Lettuce />
      <Tomato />
      <Onion />
      <Cheese />
      <Beef />
      <BottomBun />
    </div>
  );
}

export default App;
