import React from 'react'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import "./Issues.css"
import { Card } from './Card';
export const Issues = () => {
  return (
    <div className='issueCont'>
        <div className='issueTop'>
            <h1>Issues</h1>
            <div className='issueDate'>
                <CalendarTodayIcon/>
                <p><b>January,2023</b></p>
            </div>
        </div>
        <div className='issueContent'>
            <div className='toDo'>
                <p ><b className='heading'>To Do</b></p>
                <Card/>
                <Card/>
            </div>
            <div className='inProgress'>
                <p><b className='heading'>In Progress</b></p>
                <Card/>
                <Card/>
            </div>
            <div className='done'>
                <p><b className='heading'>Done</b></p>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
  )
}
