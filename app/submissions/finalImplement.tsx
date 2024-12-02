import React from 'react';

const FinalImplement = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>Final Implementation</h1>
    
    {/* Implementation Links Section */}
    <h2 style={styles.heading2}>Implementation Links</h2>
    <div style={styles.linkContainer}>
      <a href="https://github.com/your-repo-link" style={styles.link}>
        View Source Code on GitHub
      </a>
    </div>

    {/* Instructions Section */}
    <h2 style={styles.heading2}>Running Instructions</h2>
    <ol style={styles.list}>
      <li>Clone the repository: <code>git clone https://github.com/your-repo-link</code></li>
      <li>Install dependencies: <code>npm install</code></li>
      <li>Start the development server: <code>npm run dev</code></li>
      <li>Open your browser and navigate to: <code>http://localhost:3000</code></li>
    </ol>

    {/* Demo Video Section */}
    <h2 style={styles.heading2}>Demo Video</h2>
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
        src="https://www.youtube.com/embed/your-video-id"
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