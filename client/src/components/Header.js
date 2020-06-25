import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const logo = require('../logo-docto.png')
    const hivWhite = require('../vih-white.png')
    const mobile = useMediaQuery(
      json2mq({
        maxWidth: 600,
      }),
    );
  return (
    <nav style={styles.navbar}>
        {!mobile && <img style={styles.logo} src={logo} alt="logo" />}
      <ul style={styles.header}>
          
        <li>
              {mobile 
                ?
                  <>
                    <MenuIcon />
                  </>
                :
                  <>
                    <NavLink style={{padding: '10px', marginRight: '20px' }} to="/">
                        Home
                    </NavLink>
                    <NavLink to="/agenda">
                        My Pills-Box
                    </NavLink>
                  </>
              }
        </li>
        <li>
          {mobile
            ?
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={styles.logo} src={logo} alt="logo" />
                <img style={{height: '25px'}} src={hivWhite} alt="logo" />
              </div>
            :
            <div style={styles.careContainer}>
                <img style={{height: '25px'}} src={hivWhite} alt="logo" />
                <NavLink style={{padding: '10px'}} exact to="/">
                    HIV care
                </NavLink>
            </div>  
          }
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
        width: '90px',
        height: '60px',
        marginLeft: '20px',
        marginTop: '-5px',
    }
  }

export default Header;