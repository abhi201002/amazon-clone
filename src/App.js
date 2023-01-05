import './App.css';
import Header from "./components/Header"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Checkout from "./components/Checkout" 
import Login from "./components/Login"
import Home from "./components/Home"
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './components/firebase'
import { useDataValue } from './components/Datalayer';

function App() {
  const [{user},dispatch] = useDataValue()
  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser.email
        })
      }
      else{
        dispatch({
          type: "REMOVE_USER",
          // user: null
        })
      }
    })
  },[])  
  return (
    <>
    <Router>
        <div className="app">
        <Routes>
          <Route path='/checkout' element = {
            <>
            <Header/>
            <Checkout/>
            </>
          }/>
          <Route path='/login' element = {
            <>
            <Login/>
            </>
          }/>
          <Route path='/' element = {
            <>
            <Header/>
            <Home/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
