import axios from "axios";
import { useState } from "react";
import LoginForm from '../components/LoginForm'
export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(event) {
        event.preventDefault()
        const response = await axios.post('https://localhost:7168/Users/login', {email, password})
        
        const token = response.data.token;
        localStorage.setItem("token", token);  
         
        window.location.href = "/myproperties";
    }
    return(
        <>
            <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            login={login}/>
        </>
    )
}