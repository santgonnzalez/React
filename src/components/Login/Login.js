import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()

        login(username, password)
    }

    return (
        <div className="contenedor-formularios">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login