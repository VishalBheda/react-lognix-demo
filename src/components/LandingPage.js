import React, {Component} from "react";
import auth from "../auth/auth";

class LandingPage extends Component{

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerId = setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
    render() {
        return(
            <div class="container">

                <div class="jumbotron text-center">

                    <p>Login or Register with:</p>

                    <h3>It is {this.state.date.toLocaleTimeString()}</h3>

                    <button class="btn btn-default" onClick={ ()=>{
                        this.props.history.push("/login")
                    }}>Local Login</button>

                    <button class="btn btn-default" onClick={
                        ()=>{
                            this.props.history.push("/signup")
                        }
                    }>Local Signup</button>
    </div>
    </div>
        )
    }
}

export  default LandingPage