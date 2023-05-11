import React from 'react'
import "./Create.css"

export const Create = () => {
  return (
    <div className='createCont'>
        <h2>Create</h2>
        <div className='formContainer'>
            {/* <form onSubmit={}> */}
            <label className='labell'>Title:</label><br/><input className='title' type='text'  /><br/><br/>
            <label className='labell'>Type:</label><input type='text' className='inputStyle' />
            <label className='labell'>Status:</label><input type='text' className='inputStyle' /><br/><br/>
            <label className='labell'>Priority:</label><input type='text' className='inputStyle'  />
            <label className='labell'>Resolution:</label><input type='text' className='inputStyle' /><br/><br/>
            <label className='labell'>Components:</label><input type='text' className='inputStyle' />
            <label className='labell'>Assignee :</label><input type='text' className='inputStyle' /><br/><br/>
            <label className='labell'>Labels :</label><input type='text' className='inputStyle' />
            <label className='labell'> Reporter:</label><input type='text' className='inputStyle' /><br/><br/>
            <label className='labell'> Description:</label><input type='text' className='inputStyle' />
            <label className='labell'> Story Points:</label><input type='text' className='inputStyle' /><br/><br/>
            <label className='labell'> Attachment:</label><input type='file' className='inputStyle' /><br/>
            <button className='submitBtn'>Submit</button>
           {/*  </form> */}

        </div>
        
    </div>
  )
}
