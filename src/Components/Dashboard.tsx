import React from 'react'
import "./Dashboard.css"
import { Card } from './Card'

 type DashboardProps={
    
   apiData:{
    title:string,
    type:string,
    status:string,
    priority:string,
    resolution:string,
    components:string,
    storyPoints:string,
    fixVersion:string,
    labels:string,
    description:string,
    assignee:string,
    attachment:null
    


   }[]
} 

export const Dashboard = (props:DashboardProps) => {
    console.log(`Dashboard ${props.apiData}`)
  return (
    <div className='dContainer'>
        <div className='containers'>
            <div className='top'>
                <h3>Dashboard</h3>
                <div className='graph'>graph</div>
            </div>
             <div className='bottom'>
                <div className='latest'>
                <p><b className='subDash'>Latest</b></p> 
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='highPriority'><p ><b className='subDash'>High Priority</b></p> 
                <Card/>
                <Card/></div>
                <div className='list'>
                <p ><b className='subDash'>List</b></p> 
                <Card/>
                <Card/> <Card/></div>
            </div> 
        </div>
    </div>
  )
}
