import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title : ''
    }

    onChange = (e) => this.setState({
        [e.target.name] : e.target.value  // by using e.target.name you can use this function for 
    })                                    // multiple values of state object (name,pass,age etc) in a 
                                          // form. Just have name of the imput tag same as state var.

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title : ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display : 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo ..."
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
