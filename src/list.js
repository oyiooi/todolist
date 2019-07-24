import React , { Component } from 'react'
import './list.scss'

const List = ({list,onChangeFilter})=><ul className='list'>{list.map((item)=>
                                                <li key={item.id} onClick={()=>onChangeFilter(item.id)}>
                                                ● {item.text}<div key= {'div'+item.id} className={`${item.completed?'completed':'uncompleted'}`}></div>
                                                </li>
                                            )}</ul>

export default List