import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return (
        <AboutMe />,
        <Footer />
      );
    }
    if (currentPage === 'Portfolio') {
      return (
        <Portfolio />,
        <Footer />
      );
    }
    if (currentPage === 'Resume') {
      return (
        <Resume />,
        <Footer />
      );
    }
    return (
      <Contact />,
      <Footer />
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
