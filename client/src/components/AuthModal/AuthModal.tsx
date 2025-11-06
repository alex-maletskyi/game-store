import styles from './AuthModal.module.css';
import { useState } from 'react';
import { useAuth } from '../../context/useAuth';

/* a function from the parent to tell the modal to close */
type AuthModalProps = {
  onClose: () => void; // function that takes no arguments and returns nothing
};

const AuthModal = (props: AuthModalProps) => {
  const { onClose } = props;
  /* state for the email and password fields */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState(''); // for showing login errors

  const { login } = useAuth();

  /* function to handle form submission */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // prevents the page from reloading
    
    // "mock" login
    // instead of doing anything, just calls the 'login' function 
    // from our context with a fake token.
    login('fake-developer-token');
    
    onClose(); // close the modal
  };

  return (
    // the overlay is the dark semi-transparent background
    // we attach the onClose event here, so clicking the background closes the modal
    <div className={styles.overlay} onClick={onClose}>
      
      {/* we use stopPropagation here to prevent a click *inside* the modal
        from also triggering the overlay's onClick
      */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* close button */}
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2>Welcome</h2>
        <p>Sign in to your GameStore account.</p>
        {/* --- html form --- */}
        <form className={styles.authForm} onSubmit={handleSubmit}>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* show an error message if one exists */}
          {error && <p className={styles.errorText}>{error}</p>}

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
        {/* we'll add the "create account" part next */}
        <p className={styles.toggleText}>
          Don't have an account? Create One
        </p>
      </div>
    </div>
  );
};

export default AuthModal;