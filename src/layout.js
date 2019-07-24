import React , { Component } from 'react'
import './layout.scss'
import List from './list'
import GetSide from './getside'
import GetAdd from './getadd'
import GetList from './getlist'

const Layout = ()=><div className='layout'>
    <header>待办列表</header>
    <GetList></GetList>
    <GetSide></GetSide>
    <GetAdd></GetAdd>
</div>

export default Layout