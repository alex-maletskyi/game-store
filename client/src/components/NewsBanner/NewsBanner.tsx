import { Link } from 'react-router-dom';
import styles from './NewsBanner.module.css';

const NewsBanner = () => {
  return (
    <section className={styles.newsSection}>
      <h2>News</h2>
      <div className={styles.newsGrid}>
        {/* Main large image */}
        <Link to="/game/game-1" className={`${styles.newsItem} ${styles.largeItem}`}>
          {/* We'll use a div with a background image for style */}
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.newsContent}>
            <h3>Main Story Title</h3>
            <p>Click here to see more</p>
          </div>
        </Link>

        {/* Small image 1 */}
        <Link to="/game/game-2" className={styles.newsItem}>
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.newsContent}>
            <h3>Story 2</h3>
          </div>
        </Link>

        {/* Small image 2 */}
        <Link to="/game/game-3" className={styles.newsItem}>
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.newsContent}>
            <h3>Story 3</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NewsBanner;