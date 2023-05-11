import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getData } from './Api'
import { Sidebar } from './Sidebar'
import { Dashboard } from './Dashboard'
import { Header } from './Header'
import { Issues } from './Issues'
import { Create } from './Create'
type Props={
    setLogin:Dispatch<SetStateAction<boolean>>
}
export const Main = (props:Props) => {
    const {setLogin}=props

     const [sidebar,setSidebar]= useState<string>("dashboard") 
  const [data,setData]=useState([]) //'AppProps | (() => AppProps)'.
  //fetching data from API
  useEffect(() => {
    getData().then((value)=>setData(value.data))
    
  }, [])
  console.log("Data:",data)
  return (
    <div>
        <div className='header'>
      <Header setLogin={setLogin}/>
      </div>
      <div className='body'>
        <div className='sidebar'>
          
        <Sidebar setSidebar={setSidebar} />
        </div>
        <div className='bodyItems'>
          {(sidebar === "dashboard") && <Dashboard apiData={data}/>}
          {(sidebar === "issues") && <Issues/>}
          {(sidebar === "create") && <Create />}
        
         
          
          
          
        </div>
      </div>
    </div>
  )
}
