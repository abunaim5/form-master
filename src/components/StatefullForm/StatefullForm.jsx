import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState('Naim');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be character')
        }
        else {
            setError('')
            console.log(name, email, password)
        }
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleName}
                    type="text" value={name} name="name" id="" />
                <br />
                <input
                    onChange={handleEmail}
                    type="email" name="email" id="" required />
                <br />
                <input
                    onChange={handlePassword}
                    type="password" name="password" id="" />
                <br />
                <input type="submit" value='Submit' name="" id="" />
                {
                    <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;