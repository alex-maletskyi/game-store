import { Link } from 'react-router-dom';
import styles from './NewsBanner.module.css';
import type { Game } from '../../types/game';
import { useMemo } from 'react';
//game collages
import mainImage from '../../assets/game-of-year.png'; 
import sideImage1 from '../../assets/best-story-game.jpg'; 
import sideImage2 from '../../assets/action-game.jpg'; 

type NewsBannerProps = {
  games: Game[];
};

const NewsBanner = ({ games }: NewsBannerProps) => {
  
  //logic: pick 3 random games ONLY when the games list loads
  const randomLinks = useMemo(() => {
    if (games.length < 3) return ['#', '#', '#']; //fallback if data isn't loaded
    //create a shuffled copy of the games array
    const shuffled = [...games].sort(() => 0.5 - Math.random());
    //return the IDs of the first 3 games
    return [
      `/game/${shuffled[0].id}`,
      `/game/${shuffled[1].id}`,
      `/game/${shuffled[2].id}`
    ];
  }, [games]);
  
  return (
    <section className={styles.newsSection}>
      <h2>News</h2>
      <div className={styles.newsGrid}>
        {/* Main Link -> Random Game 1 */}
        <Link to={randomLinks[0]} className={`${styles.newsItem} ${styles.largeItem}`}>
          <img src={mainImage} alt="Main News" className={styles.newsImage} />
          <div className={styles.newsContent}>
            <h3>Featured Highlight</h3>
            <p>Check out this random pick!</p>
          </div>
        </Link>

        {/* Side Link 1 -> Random Game 2 */}
        <Link to={randomLinks[1]} className={styles.newsItem}>
          <img src={sideImage1} alt="News 2" className={styles.newsImage} />
          <div className={styles.newsContent}>
            <h3>Hidden Gem</h3>
          </div>
        </Link>

        {/* Side Link 2 -> Random Game 3 */}
        <Link to={randomLinks[2]} className={styles.newsItem}>
          <img src={sideImage2} alt="News 3" className={styles.newsImage} />
          <div className={styles.newsContent}>
            <h3>Community Favorite</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NewsBanner;