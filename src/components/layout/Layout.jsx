import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home1 from '../homeComponents/Home1'
import Header from '../homeComponents/Header'

const Layout = ({ username }) => {
    return (
        <Fragment>
            <div className='d-flex'>
                <Container className='col-md-3 shadow p-3 my-2 bg-body rounded  vh-100'>
                    <Home1 />
                </Container>
                <Container className='col-md-9'>
                    <Header username={username} />
                    <Outlet />
                </Container>
            </div>

        </Fragment>
    )
}

export default Layout
