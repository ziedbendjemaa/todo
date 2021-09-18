
import React, { Component } from 'react'
import Todolist from './Components/Todolist'
import "./App.css"
import Add from './Components/Add'

export default class App extends Component {
  state={
todos:[
  {id:Math.random(),action:"n9om sbeh",isDone:true},
  {id:Math.random(),action:"nemchi lel go my code",isDone:false},
]
  }
  handelDelete=(x)=>{
    this.setState({todos:this.state.todos.filter(
      el=>el.id!==x
    )})
  }
  handelComplete=(index)=>{
this.setState({todos:this.state.todos.map(
  (el)=> el.id===index?{...el,isDone: !el.isDone}:el)})
  }
  handelAdd=(newtext)=>{
let newaction={
id:Math.random(),
action:newtext,
isDone:false
}
this.setState({todos:[...this.state.todos,newaction]})
  }
  render() {
    return (
      <div className="App">
         <Add add={this.handelAdd}/>
        <Todolist list={this.state.todos} del={this.handelDelete} comp={this.handelComplete}/>
       
      </div>
    )
  }
}

