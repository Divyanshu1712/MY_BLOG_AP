import React from 'react';
import Header from './Header';
import '../styles/main.css';  // Corrected path

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
