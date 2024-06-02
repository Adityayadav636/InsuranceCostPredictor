import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import 'aos/dist/aos.css';

import Layout from './layout/Layout';
import Home from './pages/Home';
import InsuranceForm from './pages/InsuranceForm';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Insurance Cost Predictor' defaultTitle='Insurance Cost Predictor' />
      <HashRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/insurance-form' element={<InsuranceForm />} />
          </Routes>
        </Layout>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;
