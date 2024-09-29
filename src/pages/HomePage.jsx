import React, { Fragment, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { useNavigate } from 'react-router-dom';
const HomePage = ({ username }) => {
    const navigate = useNavigate();
    useEffect(() => {

        if (localStorage.getItem('issAuthorization') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <Fragment>
            <Layout username={username}>

            </Layout>
        </Fragment>
    )
}

export default HomePage
