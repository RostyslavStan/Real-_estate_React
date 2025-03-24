export default function LoginForm({email, setEmail, password, setPassword, login}) {
    return(
    <form onSubmit={login}>
        <h1><strong>Login</strong></h1>
        <input 
            type="text" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
        />
        <input  
            type="text" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required 
        />
        <button type="submit">Увійти</button>
    </form>
);
}