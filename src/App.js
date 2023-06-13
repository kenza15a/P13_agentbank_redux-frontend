
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotAvailable from './pages/NotAvailable/NotAvailable';
import UserAccounts from './pages/userAccounts/UserAccounts'
import SignInPage from './pages/signInPage/SignInPage';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/user-page" element={<UserAccounts />} exact />
          </Route>
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/*" element={<NotAvailable />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
