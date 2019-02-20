import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''

        }

    }


    handleChanges = e => this.setState ({
        [e.target.name]: e.target.value
    })

    login = e => {
        localStorage.setItem('username', this.state.username);
    };

    render() {
        return(
            <form>
                <input 
                type="text"
                value= {this.state.username}
                placeholder="username"
                name= "username"
                onChange={this.handleChanges}
                />
                <input 
                type="text" 
                value={this.state.password}
                placeholder ="password"
                name="password"
                onChange={this.handleChanges}
                />
                <button onClick={this.login}>Login</button>
            </form>
        );
    }
}



export default Login;