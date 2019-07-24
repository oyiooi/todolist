import React , { Component } from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import addListReducers from './reducers'

const store= createStore(addListReducers)
console.log(store.getState())

ReactDom.render(<Provider store= {store}><App /></Provider>,document.getElementById('root'))