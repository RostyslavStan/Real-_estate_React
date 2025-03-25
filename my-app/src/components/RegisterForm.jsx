import '../css/RegisterForm.css';

export default function RegisterForm({ name, setName, email, setEmail, password, setPassword, phoneNumber, setPhoneNumber, register }) {
    return (
        <form className="register-form" onSubmit={register}>
            <h1 className="register-title"><strong>Register</strong></h1>
            
            <input 
                className="register-input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                required
            />
            
            <input 
                className="register-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            
            <input  
                className="register-input"
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required 
            />

            <input  
                className="register-input"
                type="tel" 
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required 
            />

            <button className="register-button" type="submit">Зареєструватися</button>
        </form>
    );
}
