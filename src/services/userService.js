
import api from './api'

export default {
    login(data){
        return api.callApi(`post`,`/login`, data)
    },
    logout(){
        localStorage.removeItem('user');
    },
    register(data){
        return api.callApi(`post`, '/register', data)
    }
}