import React, {Component} from 'react'
import userService from './../services/userService'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            submmited: false,
            loading: false,
            error: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleInput(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    async handleSubmit(event){
        event.preventDefault()

        this.setState({submitted: true})
        const { username, password } = this.state

        if(!(username && password)){
            return;
        }

        this.setState({loading: true})

        let payload = {}
        payload.email = username
        payload.password = password

        let user = await userService.login(payload)
        console.log(user)

        if(user){
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));

            // const { from } = this.props.location.state || { from: { pathname: "/home" } };
            this.props.history.push("/home");
        }

    }

    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <div class="container">

                <h2><p></p></h2>
                <div class="col-sm-6 col-sm-offset-3">

                    <h1><span class="fa fa-sign-in"></span> Login</h1>

                    <form name="form" onSubmit={this.handleSubmit}>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" name="username" value={username} onChange={this.handleInput} />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" value={password} onChange={this.handleInput} />
                    </div>

                        <input type="submit" value="Submit"/>

                    </form>


                    <p>Need an account? <a>Signup</a></p>

                </div>
            </div>

        )
    }
}

export default Login