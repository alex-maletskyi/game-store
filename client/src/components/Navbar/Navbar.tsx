import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
// *links allow to store state in memory after loading (which prevents full page reload)
import { useAuth } from '../../context/useAuth';

type NavbarProps = {
  onLoginClick: () => void; // (a function that takes no arguments)
};

const Navbar = (props: NavbarProps) => {
  /* get the function from the props object */
  const { onLoginClick } = props;
  const { token, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      {/* --- logo ---*/}
      <div className={styles.navSection}>
        <a href="/" className={styles.logo}>GameStore</a>
      </div>

      {/* --- search and filters ---*/}
      <div className={`${styles.navSection} ${styles.center}`}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
          {/* add an SVG icon here later */}
        </div>
        <div className={styles.filters}>
          <button>Platform ▼</button>
          <button>Price ▼</button>
          <button>Genre ▼</button>
        </div>
      </div>

      {/* --- Links and Login --- */}
      <div className={`${styles.navSection} ${styles.right}`}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {token ? (
          // if token exists, show "log out"
          <button className={styles.loginButton} onClick={logout}>
            Log Out
          </button>
        ) : (
          // if token is null, show "log in"
          <button className={styles.loginButton} onClick={onLoginClick}>
            Log In →
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;