import React, { Component } from 'react'

class SignUp extends Component{
    state = {
        email: '',
        passwd: ''
    }
    handleChange = field => event => {
        this.setState({
          [field]: event.target.value
        })
    }
    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }
    render(){
      const errorMessages = {
        'auth/email-already-in-use': 'E-mail já foi utilizado',
        'auth/weak-password': 'Senha muito fraca',
        'auth/invalid-email': 'E-mail inválido'
      }
      return (
          <div>
            <h4>Criar conta</h4>
            <form className='form-inline'>   
                <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email'/>  
                <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha'/>
                <button type='button' className='btn btn-primary mr-1' onClick={this.createAccount} >Criar conta</button>
                <button className='btn' onClick={() => this.props.changeScreen('login')}>Já tenho uma conta. Entrar! </button>
                </form>           
                {
                this.props.isSignUpError && 
                 <div className='card text-white bg-danger mt-3'>
                    <div className='card-header'>Erro ao criar nova conta</div>
                    <div className='card-body'>
                      {errorMessages[this.props.signUpError]}
                    </div>
                 </div>
                }
          </div>
      )
    }
}
export default SignUp