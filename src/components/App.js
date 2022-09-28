import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'

function App() {
  return (
      <>
          <Banner>
              <img src={logo} alt='La maison jungle' className='lmj-logo' />
              <h1 className='lmj-title'>La maison jungle</h1>
          </Banner>
          <ShoppingList/>
      </>
  );
}

export default App;
