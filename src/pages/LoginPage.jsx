import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = ({ username, password, setUsername, setPassword, handleLogin }) => {
    const navigate = useNavigate();

    return (
        <div>
            <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin(navigate)}
            />
        </div>
    );
};

export default LoginPage;
