import '../../styles/main.css';

import barista_logo from '../../assets/main_images/logo.png';
import menu_icon from '../../assets/main_images/icon-menu.svg';
import x_icon from '../../assets/main_images/icon-x.svg';

import { useRef, useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [height, setHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => setMobileNav(false));
    setHeight(navRef.current.clientHeight);

    return () => {
      removeEventListener('resize', () => setMobileNav(false));
    };
  }, [mobileNav]);

  const navHeight = 64 + height;

  return (
    <header
      className="header"
      style={
        mobileNav
          ? { height: navHeight }
          : { height: 'unset', borderBottom: '2px white solid' }
      }
    >
      <div className="header--container | container padding-block-200">
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
            ref={navRef}
            style={
              mobileNav
                ? { borderTop: '2px white solid' }
                : { borderBottom: '0' }
            }
          >
            <li className="header--links">
              <a href="/Main/">Home</a>
            </li>
            <li className="header--links">
              <a href="/Main/hot_coffee/">Hot Coffee</a>
            </li>
            <li className="header--links">
              <a href="/Main/ice_coffee/">Ice Coffee</a>
            </li>
            <li className="header--links">
              <a href="/Main/drinks/">Drinks</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
          className="header--dropdown"
        >
          <img
            className="header--dropdown__menu"
            src={mobileNav ? x_icon.src : menu_icon.src}
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
