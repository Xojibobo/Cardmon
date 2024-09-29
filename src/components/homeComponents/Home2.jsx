import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home2 = ({ totalDebits, debtsList, setTotalDebits }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('issAuthorization') !== 'true') {
            navigate('/login');
        }
        else {
            const newDebitsTotal = debtsList.reduce((acc, debt) => acc + parseFloat(debt.debit || 0), 0);
            setTotalDebits(newDebitsTotal);
        }
    }, [debtsList, navigate, setTotalDebits]);

    return (
        <div className='shadow p-3 mb-5 bg-body rounded vh-70'>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="border col-5 rounded border-danger" >
                        <h1 className=' text-danger'>Qarzlar</h1>
                        <p className='fs-3 text-danger'>{totalDebits} <span className='fs-5'>uzs</span></p>
                    </div>
                    <div className="col-5 border border-success rounded">
                        <h1 className='text-success'>Tushumlar</h1>
                        <p className='fs-3 text-success'>0 <span className='fs-5'>uzs</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2;
