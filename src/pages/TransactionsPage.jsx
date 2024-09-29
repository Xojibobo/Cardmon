import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionsPage = ({ debtsList }) => {
    const navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('issAuthorization') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className='shadow p-3 mb-5 bg-body rounded'>
            {debtsList.map(debt => (
                <div className="container alert alert-primary" key={debt.id}>
                    <div className="row">
                        <div className="col-4">
                            <h3>{debt.firstName} <span> {debt.lastName}</span></h3>
                            <p>{debt.phoneNumber}</p>
                        </div>
                        <div className="col-4">
                            <h3>{debt.debit}</h3>
                            <p>{debt.date}</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default TransactionsPage;
