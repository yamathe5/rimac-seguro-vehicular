import './App.css';
import './styles'
import LoginPage from './pages/login-page';
import React from 'react';
import { useAuth } from './context/auth-context';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  const { user } = useAuth();
  return (
    <>
      { !user? <LoginPage/> : <AuthenticatedApp/>}
    </>
  );
}

export default App;
