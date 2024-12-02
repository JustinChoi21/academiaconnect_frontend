import React from 'react';

const FinalImplement = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>Final Implementation</h1>
    
    {/* Implementation Links Section */}
    <h2 style={styles.heading2}>1. Implementation Links</h2>
    <div style={styles.linkContainer}>
      <a 
        href="https://github.com/JustinChoi21/academiaconnect_frontend.git" 
        style={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source Code on GitHub
      </a>
    </div>

    {/* Instructions Section */}
    <h2 style={styles.heading2}>2. Running Instructions</h2>
    <ol style={styles.list}>
      <li>- The source code and installation instructions for this project can be found at: <a 
          href="https://github.com/JustinChoi21/academiaconnect_frontend.git" 
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        ><code>https://github.com/JustinChoi21/academiaconnect_frontend.git</code></a></li>
      <li>- To test the implemented features, visit <a href="https://academiaconnect.net/login" style={styles.link}><code>https://academiaconnect.net/login</code></a></li>
      <li>- Use the following credentials to log in:</li>
      <li>Email: <code>test@gmail.com</code></li>
      <li>Password: <code>test123</code></li>
    </ol>

    {/* Demo Video Section */}
    <h2 style={styles.heading2}>3. Demo Video</h2>
    <p>- This video shows the implementation of the project.</p>
    <p>- You can enable captions to see detailed explanations of each feature being demonstrated.</p>
    <p>- If the embedded video does not appear, please visit <a href="https://www.youtube.com/watch?v=FQ9AY4Fuugg" style={styles.link}>https://www.youtube.com/watch?v=FQ9AY4Fuugg</a> to view it.</p>
    <div style={styles.videoContainer}>
      <iframe
        style={{
          position: 'absolute' as const,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '0'
        }}
        src="https://www.youtube.com/embed/FQ9AY4Fuugg"
        title="Implementation Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
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
  paragraph: {
    fontSize: '16px',
    marginBottom: '15px',
    color: '#000',
  },
  linkContainer: {
    marginBottom: '20px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  list: {
    marginLeft: '20px',
    marginBottom: '20px',
  },
  videoContainer: {
    position: 'relative' as const,
    width: '100%',
    paddingTop: '56.25%', // 16:9 Aspect Ratio
    marginBottom: '20px',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default FinalImplement; 