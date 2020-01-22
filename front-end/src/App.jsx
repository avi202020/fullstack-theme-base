import React, { useState } from 'react';
import AdminLayout from './components/admin/AdminLayout';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from './components/signup/SignUpPage';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './components/main/homepage/HomePage';
import Counter from './components/counter/Counter';
import Footer from './components/footer/Footer';

import { useQuery } from '@apollo/react-hooks';
import { GET_LOCAL_THEME } from './queries/theme';

import { mainTheme, darkTheme } from './AppStyles';

const App = () => {
  const { data } = useQuery(GET_LOCAL_THEME, {
    onCompleted(data) {
      console.log(data);
    }
  });

  return (
    <>
      <Router>
        <ThemeProvider theme={data.darkTheme === false ? mainTheme : darkTheme}>
          <Route path="/voivoi" render={() => <h1>Voi Voi</h1>} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUpPage />} />
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/admin" render={() => <AdminLayout />} />
          <Route path="/counter" render={() => <Counter />} />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
