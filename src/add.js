import React , { Component } from 'react'
import './add.scss'

class Add extends Component {
       constructor(){
              super()
              this.state={
                     inputValue:''
              }
       }

       render(){
              let { inputValue } = this.state
              let { onAdd } = this.props
              return <div className='input'>
                     <input type='text' required value={inputValue} onChange={(event)=>{this.setState({inputValue:event.target.value})}}/><button onClick={()=>{
                            inputValue?onAdd(inputValue):alert('type in something')
                     }}>Add</button>
              </div>
       }
}

export default Add