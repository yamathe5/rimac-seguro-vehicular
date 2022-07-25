import './App.css';
import './styles'
import LoginPage from './pages/login-page';
import { tokenKey } from './config';

import React from 'react';
// import GraciasPage from './pages/gracias-page';
// import Gracias from './components/Gracias';
function App() {
  const [user, setUser] = React.useState(sessionStorage.getItem(tokenKey) || null)

  return (
    <>
      { !user? <LoginPage user={user} setUser={setUser}/> : <h1>Ingresaste</h1>}
    </>
  );
}

export default App;
