import React, { Dispatch, SetStateAction } from 'react'
import Logo from "../Bira assets/Logo.svg"
import Search from "../Bira assets/icon_search.svg"
import LogOut from "../Bira assets/logout.svg"
import Profile from "../Bira assets/Vivaan.svg"
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./Header.css"

type Props={
    setLogin:Dispatch<SetStateAction<boolean>>
}
export const Header= (props:Props) => {
    const {setLogin}=props

  return (
    <div className='mainContainer'>
        <div className='container'>
            <div className='headerLeft'>
                <div className='logo'>
                    <img className='images1' src={Logo} alt="image"/>
           
                     <h2>tracker</h2>
                </div>
            </div>
            <div className='headerRight'>
                <div className='searchBar'>
                    <img className='images' src={Search} alt="image"/>
                    <input type='search' placeholder='search'></input>
                </div>
                <div className='profile'>
                    <NotificationsIcon  className='images'/>
                    
                    <img className='images' src={Profile}  alt="image"/>
                    
                    <button onClick={()=>setLogin(false)}><img src={LogOut}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
