import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Project from './Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const [input, setInput] = useState('');

  const submitMessage = (e) => {
    e.preventDefault();

    setInput('');
  };

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return (
        <div>
          <AboutMe />
          <Footer />
        </div>
      );
    }
    if (currentPage === 'Portfolio') {
      return (
        <div>
          <Portfolio />
          <Project />
          <Footer />
        </div>
      );
    }
    if (currentPage === 'Resume') {
      return (
        <div>
          <Resume />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <Contact handleSubmit={submitMessage} handleChange={handleChange} input1={input} input2={input} input3={input} />
        <Footer />
      </div>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
