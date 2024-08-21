
import './Navstyle.css'
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from '../Projects/Projects'
import Hero from '../Hero/Hero'

import React, { useEffect } from 'react';


const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const activateNavLink = () => {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove('active'));
      if (navLinks[index]) {
        navLinks[index].classList.add('active');
      }
    };

    activateNavLink();
    window.addEventListener('scroll', activateNavLink);

    // Smooth scrolling
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', activateNavLink);
      navLinks.forEach((link) => {
        link.removeEventListener('click', function () {
          const sectionId = this.getAttribute('data-section');
          document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
          });
        });
      });
    };
  }, []);

  return (
    <div className='box'>
    <nav className="navbar">
      <div className="nav-links">
        <button className="nav-link" data-section="hero">Home</button>
        <button className="nav-link" data-section="projects">Projects</button>
        <button className="nav-link" data-section="skills">Skills</button>
        <button className="nav-link" data-section="contact">Contact</button>
      </div>
     
    </nav>
    </div>
  );
};

export default Navbar;
