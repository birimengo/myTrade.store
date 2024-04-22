import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  supabase  from './SupabaseClient'; // Import the Supabase client

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const signInWithEmail = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signIn({
                email: email,
                password: password
            });
            if (error) {
                console.error('Error signing in:', error.message);
            } else {
                console.log('User successfully signed in:', user);
                navigate('/maincontent');
            }
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmail(formData.email, formData.password);
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const handleGoogleLogin = () => {
        console.log("Logging in with Google...");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='email'>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <div className='password'>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className='GoogleLogin'>
                <button onClick={handleGoogleLogin}>Login with Google</button>
            </div>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;
