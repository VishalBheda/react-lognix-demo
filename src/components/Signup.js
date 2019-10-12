import React, {Component} from 'react'
import userService from './../services/userService'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email:'',
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

        const { username, password, email } = this.state

        if(!(username && password)){
            return;
        }

        this.setState({loading: true})

        let payload = {}
        payload.email = email
        payload.password = password
        payload.username = username

        let user = await userService.register(payload)
        console.log(user)

        if(user){
            // const { from } = this.props.location.state || { from: { pathname: "/home" } };
            this.props.history.push("/login");
        }

    }

    render() {
        const { username, password, email } = this.state;
        return (
            <div class="container">

                <h2><p></p></h2>
                <div class="col-sm-6 col-sm-offset-3">

                    <h1><span class="fa fa-sign-in"></span> Login</h1>

                    <form name="form" onSubmit={this.handleSubmit}>


                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" name="username" value={username}
                                   onChange={this.handleInput}/>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" name="email" value={email} onChange={this.handleInput} />
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