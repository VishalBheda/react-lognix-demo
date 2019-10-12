import React, {Component} from 'react'
import userServices from './../services/userService'

class Home extends Component{
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(){
        userServices.logout()
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>This is Home</h1>
                <h2>Welcome to  </h2>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }

}

export default Home