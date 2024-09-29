import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home1 = () => {
    const [activeButton, setActiveButton] = useState(1); // Default active button

    useEffect(() => {
        // Local storage dan saqlangan active button ID sini olamiz
        const storedActiveButton = localStorage.getItem('activeButton');
        if (storedActiveButton) {
            setActiveButton(Number(storedActiveButton)); // Saqlangan ID ni state ga o'rnatamiz
        }
    }, []);

    const handleClick = (id) => {
        setActiveButton(id);
        localStorage.setItem('activeButton', id);
    }

    return (
        <div className='p-4'>
            <h1 className='text-primary fw-bold'>Cardmon</h1>

            <Link to={'home'}>
                <Button onClick={() => handleClick(1)}
                    variant={activeButton === 1 ? "outline-primary w-100 mb-3 active" : "outline-primary w-100 mb-3 "}>Home</Button>
            </Link>
            <Link to={'debit'}>
                <Button onClick={() => handleClick(2)}
                    variant={activeButton === 2 ? "outline-primary w-100 mb-3 active" : "outline-primary w-100 mb-3 "}>Debits</Button>
            </Link>
            <Link to={'transactions'}>
                <Button onClick={() => handleClick(3)}
                    variant={activeButton === 3 ? "outline-primary w-100 mb-3 active" : "outline-primary w-100 mb-3 "}>Transactions</Button>
            </Link>
        </div>
    );
}

export default Home1;
