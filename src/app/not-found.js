'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.errorCode}>
        <span style={styles.digit}>4</span>
        <span style={styles.circle}>
          <span style={styles.exclamation}>!</span>
        </span>
        <span style={styles.digit}>4</span>
      </div>
      <h2 style={styles.heading}>Oops! You're lost.</h2>
      <p style={styles.text}>The page you are looking for was not found.</p>
      <Link href="/" passHref>
        <button style={styles.button}>Back to Home</button>
      </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '80vh',
    padding: '5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
  },
  errorCode: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '5rem',
    fontWeight: '700',
    color: '#333',
    gap: '1rem',
  },
  digit: {
    fontSize: '5rem',
  },
  circle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#e53935', // red
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '2.5rem',
  },
  exclamation: {
    marginTop: '-3px',
  },
  heading: {
    marginTop: '2rem',
    fontSize: '1.75rem',
    fontWeight: '600',
  },
  text: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#666',
  },
  button: {
    marginTop: '2rem',
    backgroundColor: '#1c1c1c',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
