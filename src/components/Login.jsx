import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Login = ({ username, password, setUsername, setPassword, handleLogin }) => {
    return (
        <Container>
            <Row className="min-vh-100 justify-content-md-center align-items-center">
                <Col xs lg="4" className='shadow-lg p-3 mb-5 bg-body rounded p-3 gap-3'>
                    <div> <h1 className='text-center fw-bold text-primary'>Cardmon</h1>
                        <p className='text-center text-secondary'>Sign in to start your custom session</p>
                    </div>
                    <div className='my-3'>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label for="username" className="form-label">User name</label>
                                <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="username" />
                            </div>
                            <div class="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" />
                            </div>
                            <Button variant="primary" className='w-100 my-2' type='submit'>
                                Sign in
                            </Button>
                        </form>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Login
