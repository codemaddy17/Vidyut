import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import InvestorDeck from './pages/InvestorDeck';

function Layout({ children }) {
  return (
    <div className="app-container app-container--visible">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home gets its own render so it can show the loading screen */}
        <Route
          path="/"
          element={
            <div className="app-container">
              <Header />
              <main><Home /></main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/investors"
          element={
            <Layout>
              <InvestorDeck />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
