import { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  //track the number of Items added to the cart
  const [numberOfCartItems, setNumberOfCartItems] = useState(0)

  //add to cart
  const addToCart = (count) => setNumberOfCartItems(prev => prev + count)
  
  //remove from cart
  const removeFromCart = () => setNumberOfCartItems(0)
  
  return (
    <div className="App">
      <header>
        <Navbar updateCart={numberOfCartItems} remove={removeFromCart}/>
        <hr />
      </header>
      <main>
        <Product add={addToCart}/>
      </main>
    </div>
  );
}

export default App;
