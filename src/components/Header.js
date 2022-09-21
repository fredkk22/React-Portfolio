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
  const [projTitle, setProjTitle] = useState('Git That Money');
  const [projImgAlt, setProjImgAlt] = useState('Git That Money Deployed App Homepage');
  const [projImgSrc, setProjImgSrc] = useState('');
  const [deployedLink, setDeployedLink] = useState('https://fredkk22.github.io/GitThatMoney/');
  const [gitRepo, setGitRepo] = useState('https://github.com/fredkk22/GitThatMoney/');
  const [input, setInput] = useState('');

  const submitMessage = (e) => {
    e.preventDefault();

    setInput('');
  };

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
        <Project
          projTitle={projTitle}
          projImgAlt={projImgAlt}
          projImgSrc={projImgSrc}
          deployedLink={deployedLink}
          gitRepo={gitRepo}
        />,
        <Project
          projTitle={setProjTitle('React Portfolio')}
          projImgAlt={setProjImgAlt('svsdv')}
          projImgSrc={setProjImgSrc('wefwegr')}
          deployedLink={setDeployedLink('https://fredkk22.github.io/React-Portfolio/')}
          gitRepo={setGitRepo('https://github.com/fredkk22/React-Portfolio/tree/gh-pages')}
        />,
        <Project
          projTitle={setProjTitle('React Portfolio')}
          projImgAlt={setProjImgAlt('svsdv')}
          projImgSrc={setProjImgSrc('wefwegr')}
          deployedLink={setDeployedLink('wefwef')}
          gitRepo={setGitRepo()}
        />,
        <Project
          projTitle={setProjTitle('React Portfolio')}
          projImgAlt={setProjImgAlt('svsdv')}
          projImgSrc={setProjImgSrc('wefwegr')}
          deployedLink={setDeployedLink('wefwef')}
          gitRepo={setGitRepo()}
        />,
        <Project
          projTitle={setProjTitle('React Portfolio')}
          projImgAlt={setProjImgAlt('svsdv')}
          projImgSrc={setProjImgSrc('wefwegr')}
          deployedLink={setDeployedLink('wefwef')}
          gitRepo={setGitRepo()}
        />,
        <Project
          projTitle={setProjTitle('React Portfolio')}
          projImgAlt={setProjImgAlt('svsdv')}
          projImgSrc={setProjImgSrc('wefwegr')}
          deployedLink={setDeployedLink('wefwef')}
          gitRepo={setGitRepo()}
        />,
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
      <Contact handleSubmit={submitMessage} handleChange={handleChange} input={input} />,
      <Footer />
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
