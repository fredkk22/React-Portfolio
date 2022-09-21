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
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const submitMessage = (e) => {
    e.preventDefault();

    setInput1('');
    setInput2('');
    setInput3('');
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
        <Contact handleSubmit={submitMessage} handleChange={handleChange} input1={input1} input2={input2} input3={input3} />
        <Footer />
      </div>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const handleChange = (e) => {
    setInput1(e.target.value);
    setInput2(e.target.value);
    setInput3(e.target.value);
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
