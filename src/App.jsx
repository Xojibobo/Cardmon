import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import DebitPage from './pages/DebitPage';
import Home2 from './components/homeComponents/Home2';
import TransactionsPage from './pages/TransactionsPage';
import HomePage from './pages/HomePage';
import DEBTS from './data/Debts';
import LOGIN from './data/Users';
import NotFound from './pages/NotFound';

function App() {
  const [username, setUsername] = useState('null');
  const [password, setPassword] = useState('');
  const [issAuthorization, setIsAuthorization] = useState(false);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [debtsList, setDebtsList] = useState(DEBTS);
  const [totalDebits, setTotalDebits] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    debit: '',
    date: '',
  });

  useEffect(() => {
    const storedAuthorization = localStorage.getItem('issAuthorization');
    const storedUsername = localStorage.getItem('username');
    if (storedAuthorization === 'true') {
      setIsAuthorization(true);
      setUsername(storedUsername);
    }
  }, [issAuthorization]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (formData.id) {
      setDebtsList(debtsList.map(debt =>
        debt.id === formData.id ? { ...formData } : debt
      ));
    } else {
      const newId = debtsList.length > 0 ? debtsList[debtsList.length - 1].id + 1 : 1;
      const newDebt = {
        id: newId,
        ...formData,
      };
      setDebtsList([...debtsList, newDebt]);
    }

    setValidated(false);
    handleClose();

    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      debit: '',
      date: '',
    });
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleClose();
    }

    setValidated(true);
  };

  const handleLogin = (navigate) => (e) => {
    e.preventDefault();
    if (LOGIN.userName === username && LOGIN.password === password) {
      toast.success("Welcome");
      navigate('/home');
      setIsAuthorization(true);
      localStorage.setItem('username', username);
      localStorage.setItem('issAuthorization', 'true');
    } else {
      toast.error("Login or password is wrong");
    }
  };

  const editDebit = (id) => {
    const debitFound = debtsList.find(debt => debt.id === id);
    setFormData(debitFound)
    handleShow();

  }
  const handleDelete = (id) => {
    const updatedDebtsList = debtsList.filter(debt => debt.id !== id);
    setDebtsList(updatedDebtsList);
  };

  const loginPageProps = { username, password, setUsername, setPassword, handleLogin };
  const debitsPageProps = { debtsList, show, validated, formData, handleInputChange, handleSaveChanges, handleSubmit, handleClose, handleShow, editDebit, handleDelete, };
  const homePageProps = { username };
  const home2Props = { totalDebits, debtsList, setTotalDebits };
  const transactionsProps = { debtsList };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<LoginPage {...loginPageProps} />} />
        <Route path='/' element={<HomePage{...homePageProps} />}>
          <Route path='/home' element={<Home2 {...home2Props} />} />
          <Route path='debit' element={<DebitPage {...debitsPageProps} />} />
          <Route path='transactions' element={<TransactionsPage {...transactionsProps} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
