import '../../styles/main.css';

import barista_logo from '../../assets/main_images/logo.png';
import menu_icon from '../../assets/main_images/icon-menu.svg';
import x_icon from '../../assets/main_images/icon-x.svg';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setMobileNav(false));

    return () => {
      removeEventListener('resize', () => setMobileNav(false));
    };
  }, [mobileNav]);

  return (
    <header className="header | padding-block-200">
      <div className="header--container | container">
        <div className="header--left">
          <img className="header--logo" src={barista_logo.src} alt="" />
          <a href="/" className="header--title | text-neutral-100 fw-medium">
            Barista Chaw Su
          </a>
        </div>
        <nav className="header--navigation">
          <ul
            role="list"
            className={'header--right' + (mobileNav ? '__toggle' : '')}
          >
            <li className="header--links">Home</li>
            <li className="header--links">Hot Coffee</li>
            <li className="header--links">Ice Coffee</li>
            <li className="header--links">Drinks</li>
            <li className="header--links">Fresh Juice</li>
          </ul>
        </nav>
        <button
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
          className="header--dropdown"
        >
          <img
            class="header--dropdown__menu"
            src={mobileNav ? x_icon.src : menu_icon.src}
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
