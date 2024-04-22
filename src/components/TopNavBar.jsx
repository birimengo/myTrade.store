import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Categories from './Categories'; // Import the Categories component
import MainContent from './MainContent';

const TopNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setMenuOpen(false);
        setShowCategories(false);
      }
    };

    const handleDoubleClickInside = () => {
      setShowCategories(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('dblclick', handleDoubleClickInside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('dblclick', handleDoubleClickInside);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
    setShowCategories(false);
  };

  const toggleCategories = () => {
    setShowCategories(prevShow => !prevShow);
  };

  const handleMenuItemClick = (destination) => {
    // Perform any action needed when a menu item is clicked
    // For example, you can navigate to the destination
    console.log(`Navigating to: ${destination}`);
  };

  const navigateToForYou = () => {
    navigate('/foryou'); // Navigate to the "ForYou" component
  };

  const navigateToMainContent = () => {
    navigate('/MainContent');
  };

  return (
    <div className='TopBox'>
      <nav className={`nav ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className='mytrade' onClick={navigateToMainContent}>MYTRADE</div>
        <section className='SearchIcon'>
          <SearchIcon />
        </section>
        <section className='BrightnessToggle' onClick={toggleDarkMode}>
          {darkMode ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
        </section>
        <section className='NotificationsIcon'>
          <NotificationsIcon />
        </section>
        <section className='MenuIcon' onClick={toggleMenu}>
          {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </section>
        <section className='AccountCircleIcon'>
          <AccountCircleIcon />
        </section>
      </nav>
    
      <div className='Navigation'>
        <section className='Categories' onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}>
          <button>Categories</button>
        </section>
        <section className='TopWholesalers'>
          <button>Wholesalers</button>
        </section>
        <section className='NewCommodities'>
          <button>New</button>
        </section>
        <section className='foryou'>
          <button onClick={navigateToForYou}>For you</button> {/* Add onClick event to navigate to ForYou component */}
        </section>
      </div>
      
      {showCategories && (
        <div ref={popupRef} className='CategoriesPopup'>
          <Categories />
        </div>
      )}

      {menuOpen && (
        <div ref={popupRef} className='PopupMenu'>
          <ul>
            <li onClick={() => handleMenuItemClick('/signup')}><Link to="/signup" className='Register'>Register</Link></li>
            <li onClick={() => handleMenuItemClick('/login')}><Link to="/login" className='Login'>Login</Link></li>
            <li onClick={() => handleMenuItemClick('/aboutus')}><Link to="/aboutus" className='AboutUs'>AboutUs</Link></li>
            <li onClick={() => handleMenuItemClick('/talktous')}><Link to="/talktous" className='AboutUs'>TalkToUs</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
