import React, { Component } from 'react'

export default class Add extends Component {
    state={
        newtask:""
    }
    handelchange=(e)=>{
        this.setState({newtask:e.target.value})
    }
    handelsubmit=(e)=>{
        e.preventDefault()
        this.state.newtask===""?
        alert('please give me your task'):
        this.props.add(this.state.newtask)
        this.setState({newtask:""})
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handelsubmit}>
<input type="text" value={this.state.newtask} onChange={this.handelchange}/>
<button className="boton3">Add</button>

                </form>
            </div>
        )
    }
}
