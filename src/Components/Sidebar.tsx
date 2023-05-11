import React, { Dispatch, SetStateAction, useState }  from 'react'
import "./Sidebar.css"

type SideBarProps={
    setSidebar:Dispatch<SetStateAction<string>>
}

export const Sidebar = (props:SideBarProps) => {
    const {setSidebar}=props
  return (
    <div className='mainBody'>
        <div className='containerr'>
            <button onClick={()=>setSidebar("dashboard")} className='active' ><h2>Dashboard</h2></button>
            <button onClick={()=>setSidebar("issues")}><h2>Issues</h2></button>
            <button onClick={()=>setSidebar("create")}><h2>Create</h2></button>
            

        </div>
    </div>
  )
}
