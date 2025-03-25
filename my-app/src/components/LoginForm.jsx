import '../css/LoginForm.css';

export default function LoginForm({ email, setEmail, password, setPassword, login }) {
    return (
        <form className="login-form" onSubmit={login}>
            <h1 className="login-title"><strong>Login</strong></h1>
            <input 
                className="login-input"
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input  
                className="login-input"
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required 
            />
            <button className="login-button" type="submit">Увійти</button>
        </form>
    );
}