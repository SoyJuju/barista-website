import '../../styles/main.css';

import barista_logo from '../../assets/main_images/logo.png';
import menu_icon from '../../assets/main_images/icon-menu.svg';
import x_icon from '../../assets/main_images/icon-x.svg';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [height, setHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => setMobileNav(false));
    setHeight(navRef.current.clientHeight);

    return () => {
      removeEventListener('resize', () => setMobileNav(false));
    };
  }, [mobileNav]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navHeight = 64 + height;

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
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
              <a href="/">Home</a>
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
    </motion.header>
  );
}
