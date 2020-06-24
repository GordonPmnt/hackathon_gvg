import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
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
      textAlign: 'center',
      width: '100%',
      disply: 'flex',
      justifyContent: 'center',
      backgroundColor: 'rgb(65, 149, 216)',
      margin: 0,
    },
  }

export default Header;