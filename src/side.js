import React , { Component } from 'react'
import './side.scss'

const Side = ({ filterState , onToChange })=>{
    return <div className='side'>
                <button className={`${filterState==='O'?'completed active':'completed'}`} onClick={()=>onToChange('O')}>O</button>
                <button className={`${filterState==='T'?'uncompleted active':'uncompleted'}`} onClick={()=>onToChange('T')}>T</button>
                <button className={`${filterState==='A'?'all active':'all'}`} onClick={()=>onToChange('A')}>A</button>
           </div>
}

export default Side