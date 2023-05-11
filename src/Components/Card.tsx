import React, { useEffect, useState } from 'react'
import Profile from "../Bira assets/Sanal.svg"

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import "./Card.css"
import { getData } from './Api';


export const Card = () => {
    /* const [data,setData]=useState([])
    //fetching data from API
  useEffect(() => {
    getData().then((value)=>setData(value.data))
    console.log("Data is:",data)
  }, []) */
  return (
    <div className='cardCont'>
        <div className='cardTop'>
            <p>24 january 2023</p>
        </div>
        <div className='cardMiddle'>
            <b><p>Design a New letter for summebr nbvv</p></b>
            <p>Design a New letter for summebr nbvv</p>
        </div>
        <div className='cardEnd'>
            <div className='cardEndLeft'>
                <div className='activeIcon'><AssignmentTurnedInIcon className='activeIconn'/></div>
                <p>PCGD463</p>
            </div>
            <div className='cardEndRight'>
                <b className='bold'>Jeo Jhonson</b>
                <img src={Profile} alt='imgg'/>
            </div>

            

        </div>
    </div>
  )
}
