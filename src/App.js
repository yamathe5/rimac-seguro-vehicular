import './App.css';
import './styles'
import LoginPage from './pages/login-page';
import { tokenKey } from './config';

import React from 'react';
import ArmaTuPlan from './pages/arma-tu-plan';
import GraciasPage from './pages/gracias-page';
import { useAuth } from './context/auth-context';
// import Gracias from './components/Gracias';
function App() {
  // const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem(tokenKey)) || null)
  const { user } = useAuth();
  return (
    <>
     {/* <GraciasPage/> */}
      { !user? <LoginPage/> : <ArmaTuPlan/>}
    </>
  );
}

export default App;
