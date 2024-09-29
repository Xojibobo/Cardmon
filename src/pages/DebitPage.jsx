import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const DebitPage = ({
    debtsList,
    formData,
    handleInputChange,
    handleSaveChanges,
    validated,
    show,
    handleShow,
    handleClose,
    editDebit,
    handleDelete,
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('issAuthorization') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className='shadow p-3 mb-5 bg-body rounded'>
            <Button variant="primary my-3" onClick={handleShow}>
                Add+
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Debt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSaveChanges}>
                        <Form.Group controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid first name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid last name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid phone number</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="debit">
                            <Form.Label>Debit</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={formData.debit}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid debit</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid date</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant="primary my-3">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
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
                            <div className="col-4 d-flex align-items-center">
                                <button type="button" onClick={() => editDebit(debt.id)} className="btn btn-warning text-white me-2">Edit</button>
                                <button type="button" onClick={() => handleDelete(debt.id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

DebitPage.propTypes = {
    debtsList: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSaveChanges: PropTypes.func.isRequired,
    validated: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    handleShow: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default DebitPage;
