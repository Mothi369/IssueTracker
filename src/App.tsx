import React,{useState,useEffect} from 'react';

import './App.css';

import { Login } from './Components/Login';
import { Main } from './Components/Main';

/* type AppProps={
  title:string,
  type: string
} */

function App() {
  const [login,setLogin]=useState<boolean>(false)
 



  return (
    <div className="App">
      {!login ? <Login setLogin={setLogin}/>:<Main setLogin={setLogin}/>} 
      
      
    </div>
  );
}

export default App;
