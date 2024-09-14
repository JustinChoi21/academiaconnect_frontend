import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CS 615 User Design Interface Team Project</h1>
      <h2 style={styles.subtitle}>Academia Connect</h2>
      <a href="/submission" style={styles.link}>submission</a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    marginBottom: '0.5em',
  },
  subtitle: {
    fontSize: '1.5em',
    marginBottom: '1em',
  },
  link: {
    fontSize: '1.2em',
    color: '#0070f3',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};
