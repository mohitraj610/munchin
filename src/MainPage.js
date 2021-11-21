import {  useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Store/CartProvider';

const MainPage = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClick={props.onLogout} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default MainPage;