import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Checkout from "./components/Ckeckout/Checkout"
import Login from './User/Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider/Stateprovider';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Email } from '@material-ui/icons';
import Payment from './components/Payment/Payment';
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe("pk_test_51LCMP6SDnoB1xhM4lD0b6zgik15ieZuJdZSplgddsQYftDBTunnZoQN4b3G1oO9uVQfkgzlL5j7zgb5PALqn6psr00b7EfAWzw")

function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<> <Header /><Home /></>} />
          <Route path='/checkout' element={<> <Header /><Checkout /></>} />
       
         <Route path='/payment' element = {<Elements  stripe={promise}><Header/><Payment/></Elements>}/>
      
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
