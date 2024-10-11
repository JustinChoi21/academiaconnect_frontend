import React from 'react';

const Storyboards = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>4. Storyboards</h1>

    <h2 style={styles.heading2}>Task #1</h2>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task1.png" 
        alt="Task1" 
        style={styles.image}
      />
    </div>

    <p style={styles.paragraph}>
      This is Task 1 storyboard.
    </p>

  </div>
);

const styles = {
  container: {
    lineHeight: '1.6',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
  },
  heading1: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#000',
  },
  heading2: {
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#000',
  },
  heading3: {
    fontSize: '18px',
    marginTop: '15px',
    marginBottom: '8px',
    color: '#000',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '15px',
    color: '#000',
  },
  list: {
    marginBottom: '15px',
    paddingLeft: '20px',
    color: '#000',
  },
  imageContainer: {
    width: '100%',
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
  },
};

export default Storyboards;