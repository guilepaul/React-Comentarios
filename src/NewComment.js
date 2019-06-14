import React, { Component } from 'react'

class NewComment extends Component{
    state = {
        newComment: ''
    }
    handleChange = event => {
        this.setState({
          newComment: event.target.value
        })
    }
    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }
    render(){
        return(
          <div className="d-flex flex-column align-items-end">
            <textarea className='form-control' value={this.state.newComment} onChange={this.handleChange}></textarea>
            <button className='btn btn-primary mt-1' onClick={this.sendComment}>Enviar</button>
          </div>
        )
    }
}
export default NewComment