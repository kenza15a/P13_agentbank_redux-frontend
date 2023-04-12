import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotAvailable from './pages/NotAvailable/NotAvailable';
import UserAccounts from './pages/userAccounts/UserAccounts'
import SignInPage from './pages/signInPage/SignInPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/user-page" element={<UserAccounts />} />
          <Route path="/*" element={<NotAvailable />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
