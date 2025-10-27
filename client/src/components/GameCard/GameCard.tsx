import styles from './GameCard.module.css';
import type { Game } from '../../types/game';

//Any object that wants to be considered GameCardProps must have a property called game, 
// and the value of that property must be of type Game
type GameCardProps = {
  game: Game; // Use the imported Game type here
};

// SIMPLE COMPONENT DEFINITION:
// The component receives one argument called "props".
// This "props" object must be of type "GameCardProps".
const GameCard = (props: GameCardProps) => {

  // To get our game data, we access it inside the function:
  const game = props.game;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.platform}>{game.platform}</span>
        <span className={styles.saleTag}>-40%</span>
      </div>
      
      <img src={game.imageUrl} alt={game.title} className={styles.gameImage} />
      
      <div className={styles.gameInfo}>
        <span className={styles.title}>{game.title}</span>
        <span className={styles.price}>${game.price.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.iconButton}>❤️</button>
        <button className={styles.iconButton}>🛒</button>
        <button className={styles.iconButton}>🛍️</button>
      </div>
    </div>
  )
}

export default GameCard;