import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AuthDataProvider from './components/auth/LoginContext';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <Header/>
        <Main/>
        <Footer/>
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
