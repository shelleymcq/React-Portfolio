import React from 'react';
import '../styles/Navbar.css';

const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  };

const Navbar = () => {
    return (
        <nav className="navbar" style={styles.navbar}>
            <div>
                <a href="/">Work</a>
            </div>
        <div>
            <a href="/">About</a>
        </div>
        <div>
            <a href="/">Contact</a>
        </div>

      </nav>
    )
}

export default Navbar