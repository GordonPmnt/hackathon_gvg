import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const logo = require('../logo-docto.png')
    const hivWhite = require('../vih-white.png')
  return (
    <nav style={styles.navbar}>
        <img style={styles.logo} src={logo} alt="logo" />
      <ul style={styles.header}>
          
        <li>
                <NavLink style={{padding: '10px', marginRight: '20px' }} to="/">
                    Accueil
                </NavLink>
                <NavLink to="/agenda">
                    Agenda
                </NavLink>
        </li>
        <li>
            <div style={styles.careContainer}>
                <img style={{height: '25px'}} src={hivWhite} alt="logo" />
                <NavLink style={{padding: '10px'}} exact to="/">
                    HIV care
                </NavLink>
            </div>    
        </li>
      </ul>
    </nav>
  );
};

const styles = {
    careContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    header: {
      textDecoraton: 'none',  
      listStyleType: 'none',  
      color: 'white',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0,
      padding: '10px 20px',
      alignItems: 'center',
    },
    navbar: {
        display: 'flex',
        height: '50px',
        backgroundColor: 'rgb(65, 149, 216)',
    },
    logo: {
        width: '100px',
        height: '60px',
        marginLeft: '20px',
        marginTop: '-5px',
    }
  }

export default Header;