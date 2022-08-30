import './App.css';
import ResponsiveAppBar from './Navbar';
import MediaControlCard from './FoodItem';
import CheckoutPage from './Checkout';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [itemArray, setItemArray] = useState([]);
  
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Context.Provider value={{count, setCount, total, setTotal, itemArray, setItemArray}} >
      <MediaControlCard/>
      <CheckoutPage />
      </Context.Provider>
    </div>
  );
}

export default App;
