import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.header}>
        <li>
            Accueil
        </li>
        <li>
            HIV care
        </li>
      </ul>
    </nav>
  );
};

const styles = {
    header: {
      listStyleType: 'none',  
      color: 'red',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      margin: 0,


    },
    navbar: {
        height: '3vh',
        backgroundColor: 'rgb(65, 149, 216)',
    }
  }
  



export default Header;