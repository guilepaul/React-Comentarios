import React from 'react'

const User = props => {
    return(
        <div>
            Logado como: {props.email}
            <button className='btn btn-outline-primary ml-3' onClick={props.logout}>Sair</button>
        </div>
    )
}

export default User