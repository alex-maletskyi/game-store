import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
//Links allow to store state in memory after loading (which prevents full page reload)

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* --- Logo ---*/}
      <div className={styles.navSection}>
        <a href="/" className={styles.logo}>GameStore</a>
      </div>

      {/* --- Search and Filters ---*/}
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
        <button className={styles.loginButton}>Log In →</button>
      </div>
    </nav>
  );
};

export default Navbar;