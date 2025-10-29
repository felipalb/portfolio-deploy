import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#footer' className='footer__logo'>Felipe Alberto</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>Felipe Alberto &copy; rev. 10/2025</small>
        <br/>
        <small>*With faith next distinguished WWDC26 winner</small>
      </div>

    </footer>
  )
}

export default Footer;