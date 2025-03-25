import axios from "axios";
import { useState } from "react";
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    async function register(event) {
        event.preventDefault();
        const response = await axios.post('https://localhost:7168/Users/register', {
            name,
            email,
            passwordHash,
            phoneNumber
        });

        window.location.href = "/login";
    }

    return (
        <>
            <RegisterForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={passwordHash}
                setPassword={setPasswordHash}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                register={register}
            />
        </>
    );
}
