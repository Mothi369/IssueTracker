import React, { Dispatch, SetStateAction } from 'react'
import "./Login.css"

type LoginProps={
    setLogin:Dispatch<SetStateAction<boolean>>
}
export const Login = (props:LoginProps) => {
    const {setLogin}=props
  return (
    <div className='loginCont'>
        <div className='outsideLogin'>
            <div className='loginCard'>
               <h2>Login into Issue Tracker</h2> 
                <button className='loginBTN' onClick={()=>setLogin(true)}>Login</button>
            </div>
            
        </div>
    </div>
  )
}
